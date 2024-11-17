# Ứng Dụng Chat Sử Dụng Spring Boot

Repository này chứa mã nguồn của một ứng dụng chat sử dụng Spring Boot cho phần backend và bao gồm cả ứng dụng client. Backend được chia thành hai service: `auth-service` để quản lý xác thực người dùng, và `chat-service` để quản lý tin nhắn. Ứng dụng client cung cấp giao diện web cơ bản được xây dựng bằng React. Tất cả các service đều được đóng gói trong Docker và quản lý bằng Docker Compose. Ứng dụng được truy cập thông qua một điểm vào duy nhất trên cổng 80, được quản lý bởi Nginx. Nginx phục vụ các tệp tĩnh cho ứng dụng frontend và cũng hoạt động như một API gateway, quản lý giao tiếp với và giữa các service backend.

## Các Service

- `auth-service`: Xử lý xác thực người dùng. Sử dụng Spring Security cho xác thực và JWT để duy trì phiên người dùng.

- `chat-service`: Xử lý tin nhắn chat. Sử dụng MongoDB để lưu trữ tin nhắn và Redis để cache.

- `chat-app-client`: Giao diện web đơn giản cho ứng dụng chat. Được xây dựng bằng React và sử dụng STOMP Client để giao tiếp thời gian thực với chat service.

## Bắt Đầu

Để bắt đầu với ứng dụng, bạn cần cài đặt Docker và Docker Compose trên máy tính của bạn. Sau khi có các điều kiện tiên quyết này, bạn có thể clone repository và sử dụng Docker Compose để xây dựng và chạy ứng dụng.

## Chạy Ứng Dụng

1. Clone repository:

```sh
git clone 
cd spring-microservices-chat-app
```

2. Xây dựng các service:

```sh
docker compose build
```

3. Khởi động ứng dụng:

```sh
docker compose up -d
```

4. Truy cập ứng dụng tại `http://localhost`

## Dừng Ứng Dụng

Để dừng ứng dụng, chạy lệnh sau:

```sh
docker compose down
```

## Tính Năng Hiện Tại

### Backend
- Xác thực JWT
- Nhắn tin thời gian thực qua WebSocket
- Theo dõi trạng thái online của người dùng
- Các thao tác CRUD cơ bản với tin nhắn
- MongoDB cho lưu trữ tin nhắn
- MySQL cho dữ liệu người dùng
- Redis cho cache

### Frontend
- Giao diện dựa trên React
- Luồng xác thực cơ bản
- Giao diện chat đơn giản
- Hiển thị thời gian tin nhắn
- Chỉ báo trạng thái tin nhắn
- Thiết kế responsive

## Công Nghệ Sử Dụng

### Backend
- Spring Boot
- Spring Security
- Spring Data JPA
- Spring WebSocket
- MongoDB
- MySQL
- Redis
- JWT

### Frontend
- React
- WebSocket (STOMP)
- date-fns
- Tailwind CSS

## Đóng Góp

Nếu bạn muốn đóng góp cho dự án, hãy tạo pull request hoặc báo cáo issues trên GitHub.

## Giấy Phép

Dự án này được phân phối dưới Giấy phép MIT. Xem file `LICENSE` để biết thêm chi tiết.
