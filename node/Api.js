const express = require("express");
const mysql = require("mysql2/promise");
const cors = require("cors");

const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false })); // 解析 application/x-www-form-urlencoded 格式数据
app.use(bodyParser.json()); // 解析 application/json 格式数据
app.use(cors()); //是一个 函数
// 创建连接池
const pool = mysql.createPool({
  host: "127.0.0.1",
  user: "root",
  password: "1234",
  database: "chatdatabase",
  // 在这里添加其他数据库连接相关信息
});

//获取聊天消息
app.get("/api/chatMessage", async (req, res) => {
  try {
    // 获取连接对象
    const connection = await pool.getConnection();

    const result = await connection.query(
      "SELECT * FROM message WHERE (sender_id=? AND receiver_id=?) OR (sender_id=? AND receiver_id=?) ORDER BY timestamp ASC",
      [
        req.query.sender_id,
        req.query.receiver_id,
        req.query.receiver_id,
        req.query.sender_id,
      ]
    );

    connection.release();

    res.status(200).send(result[0]);
  } catch (error) {
    res.status(500).send(error.message); // 返回错误信息
  }
});

//添加聊天消息
app.post("/api/chatMessage", async (req, res) => {
  try {
    const connection = await pool.getConnection();
    console.log("添加聊天消息");
    const message = {
      message_id: req.body.params.message_id,
      sender_id: req.body.params.sender_id,
      receiver_id: req.body.params.receiver_id,
      timestamp: new Date(),
      content: req.body.params.content,
      type: "图片",
    };
    // 插入消息数据到数据库中
    // const result = await connection.query("INSERT INTO message SET ?", [message]);

    // 返回查询结果
    res.status(200).send("nice");
  } catch (error) {
    res.status(500).send(error.message); // 返回错误信息
  }
});

//获得最近聊天预览
app.get("/api/recentMessage",async(req,res)=>{
  try {
    const connection=await pool.getConnection();
    const result=await connection.query(' SELECT * FROM recent_message  ');
    console.log(result[0]);
    res.status(200).send(result[0]);
  } catch (error) {
    console.log(error);
  }
})

//testApi
app.get("/api/Test", (req, res) => {
  try {
    // 获取连接对象
    res.send("nice");
  } catch (error) {
    res.status(500).send(error.message); // 返回错误信息
  }
});
// 启动服务器
app.listen(3008, () => {
  console.log("Server started on port 3008");
});
