# Project Overview
Hệ thống chat thời gian thực với kiến trúc microservices, tập trung vào khả năng mở rộng và hiệu suất cao.

# Core Functionalities

1. Service Infrastructure Setup
   1. ❌ Setup Service Registry (Eureka)
      1. ❌ Configure Eureka Server properties
      2. ❌ Enable service registration and discovery
      3. ❌ Setup health check endpoints
   2. ✅ Configure API Gateway
      1. ✅ Setup routing rules for all services (using Nginx)
      2. ❌ Implement rate limiting
      3. ❌ Configure load balancing
   3. ❌ Setup Monitoring
      1. ❌ Implement logging system
      2. ❌ Configure metrics collection
      3. ❌ Setup monitoring dashboards

2. Database Implementation
   1. ✅ Setup MongoDB for Messages & Rooms
      1. ✅ Design message collection schema
      2. ✅ Design chat room collection schema
      3. ✅ Implement indexes for efficient queries
   2. ✅ Setup MySQL for User Data
      1. ✅ Design user table schema
      2. ✅ Setup authentication tables
      3. ✅ Configure connection pools
   3. ✅ Setup Redis for Caching
      1. ✅ Configure cache settings
      2. ✅ Implement cache strategies (user sessions)
      3. ✅ Setup cache invalidation

3. Backend Services Development
   1. User Service Implementation
      1. ✅ Create user management APIs
         1. ✅ Registration endpoint
         2. ✅ Login endpoint
         3. ❌ Profile management endpoints
      2. ✅ Implement authentication
         1. ✅ JWT token generation
         2. ✅ Password encryption
         3. ❌ Session management
         4. ❌ Refresh token support
      3. ✅ User presence tracking
         1. ✅ Online status management
         2. ✅ Last seen updates
         3. ❌ Activity logging
   
   2. Messaging Service Implementation
      1. ✅ Create message handling system
         1. ✅ Message creation endpoints
         2. ✅ Message retrieval endpoints
         3. ✅ Message update/delete endpoints
            1. ✅ Delete single message
            2. ✅ Delete entire chat history
            3. ❌ Message forwarding API
      2. ✅ Implement WebSocket
         1. ✅ Configure WebSocket server
         2. ✅ Setup message broadcasting
         3. ✅ Implement typing indicators
            1. ✅ Send typing status
            2. ✅ Broadcast typing events
            3. ✅ Handle typing timeout
      3. ❌ Chat room management
         1. ❌ Room creation/deletion
         2. ❌ Member management
         3. ❌ Room settings management
            1. ❌ Mute notifications
            2. ❌ Block users
            3. ❌ Admin privileges

   3. ❌ Message Enhancement Features
      1. ❌ Unread Messages System
         1. ❌ Track last read message
         2. ❌ Count unread messages
         3. ❌ Mark messages as read
      2. ❌ Message Actions
         1. ❌ Copy message
         2. ❌ Forward message
         3. ❌ Delete message
      3. ❌ Emoji Support
         1. ❌ Emoji picker
         2. ❌ Emoji reactions
         3. ❌ Emoji in messages

4. Frontend Development
   1. ✅ Setup React Application
      1. ✅ Configure project structure
      2. ✅ Setup routing system
      3. ✅ Implement state management
   
   2. ✅ Core Components Development
      1. ✅ Authentication components
         1. ✅ Login form
         2. ✅ Registration form
         3. ❌ Profile settings
      2. ✅ Chat interface
         1. ✅ Message list component
         2. ✅ Input area component
         3. ✅ Chat room list

5. Advanced Features Implementation
   1. ❌ Voice/Video Call Service
      1. ❌ WebRTC Server Setup
         1. ❌ Signaling server implementation
         2. ❌ ICE server configuration
         3. ❌ Media server setup
      2. ❌ Client Implementation
         1. ❌ WebRTC client setup
         2. ❌ Media stream handling
         3. ❌ UI components
   
   2. ❌ File Storage Service
      1. ❌ Storage Service Setup
         1. ❌ File upload endpoint
         2. ❌ File download endpoint
         3. ❌ File deletion endpoint
      2. ❌ Storage Implementation
         1. ❌ Local storage setup
         2. ❌ Cloud storage integration
         3. ❌ File type validation
      3. ❌ Frontend Integration
         1. ❌ File upload component
         2. ❌ File preview component
         3. ❌ Progress tracking

   3. ❌ Group Chat Features
      1. ❌ Group Management
         1. ❌ Create/Delete groups
         2. ❌ Add/Remove members
         3. ❌ Group settings
      2. ❌ Role Management
         1. ❌ Define roles
         2. ❌ Assign permissions
         3. ❌ Role hierarchy
      3. ❌ Group Features
         1. ❌ Group announcements
         2. ❌ Pinned messages
         3. ❌ Member list management
