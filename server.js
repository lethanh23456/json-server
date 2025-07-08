const jsonServer = require('json-server');
const path = require('path');
const cors = require('cors'); // <- thêm dòng này

const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, 'database.json')); // hoặc db.json nếu bạn đổi tên
const middlewares = jsonServer.defaults();

const PORT = process.env.PORT || 3000;

server.use(cors()); // ✅ thêm dòng này để bật CORS
server.use(middlewares);
server.use(jsonServer.bodyParser);
server.use(router);

server.listen(PORT, () => {
  console.log(`JSON Server is running on port ${PORT}`);
});
