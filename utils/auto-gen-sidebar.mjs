import path from "node:path";
import fs from "node:fs";

const isDirectory = (path) => fs.statSync(path).isDirectory(); // 判断是否是文件夹
const baseUrl = "/"; // 基础路径, 拼接目录用

export const setSidebar = (pathname) => {
  const dirPath = path.join(path.resolve(), baseUrl, pathname); // 拼接目录
  if (isDirectory(dirPath)) {
    // 传入的是文件夹, 则读取文件夹下文件和文件夹, 递归
    const files = fs.readdirSync(dirPath);
    const items = files.map((file) => setSidebar(`${pathname}/${file}`));
    const text = pathname.replace(/.*\//g, ""); // 去除二级路径
    const link = items.some((o) => o.text === "index") ? `/${pathname}/` : "";
    return {
      text,
      link,
      collapsible: true,
      items: items.filter((o) => o.text !== "index"),
    };
  } else {
    // 传入的是路径, 则返回单条数据
    const name = path.basename(dirPath); // 获取名字
    const suffix = path.extname(dirPath); // 排除非 md 文件
    const text = name.replace(suffix, ""); // 去除后缀
    const link = `/${pathname.replace(`/${name}`, "")}/${text}`;
    return {
      text,
      link,
    };
  }
};

export default setSidebar;