# 🚀Exesice - Học ReactJS - Từ Cơ Bản Đến Nâng Cao
 
## 📋 Mục Lục
1. [Giai Đoạn 1: Nền Tảng JavaScript & ES6+](#giai-đoạn-1)
2. [Giai Đoạn 2: ReactJS Cơ Bản](#giai-đoạn-2)
3. [Giai Đoạn 3: ReactJS Trung Cấp](#giai-đoạn-3)
4. [Giai Đoạn 4: ReactJS Nâng Cao](#giai-đoạn-4)
5. [Giai Đoạn 5: Chuyên Sâu & Best Practices](#giai-đoạn-5)
6. [Giai Đoạn 6: Ecosystem & Tools](#giai-đoạn-6)
 
---
 
## 🎯 Giai Đoạn 1: Nền Tảng JavaScript & ES6+ {#giai-đoạn-1}
 
### Kiến Thức Cần Nắm:
- ✅ Variables (let, const, var)
- ✅ Arrow Functions
- ✅ Template Literals
- ✅ Destructuring (Array, Object)
- ✅ Spread & Rest Operators
- ✅ Array Methods (map, filter, reduce, forEach)
- ✅ Promises & Async/Await
- ✅ Modules (import/export)
- ✅ Classes & OOP cơ bản
 
### 📝 Bài Tập Thực Hành:
 
#### Bài Tập 1.1: ES6+ Fundamentals
**Mục tiêu:** Làm quen với cú pháp ES6+
 
**Yêu cầu:**
1. Tạo một file `exercises/es6-basics.js`
2. Viết các hàm sử dụng:
   - Arrow functions để tính tổng, hiệu, tích, thương
   - Destructuring để lấy thông tin từ object user
   - Spread operator để merge 2 arrays
   - Template literals để format string
 
**Ví dụ:**
```javascript
// Arrow functions
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
 
// Destructuring
const user = { name: 'John', age: 30, email: 'john@example.com' };
const { name, age } = user;
 
// Spread operator
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const merged = [...arr1, ...arr2];
 
// Template literals
const greeting = `Hello, ${name}! You are ${age} years old.`;
```
 
#### Bài Tập 1.2: Array Methods
**Mục tiêu:** Thành thạo các phương thức mảng
 
**Yêu cầu:**
1. Tạo file `exercises/array-methods.js`
2. Cho mảng users:
```javascript
const users = [
  { id: 1, name: 'Alice', age: 25, active: true },
  { id: 2, name: 'Bob', age: 30, active: false },
  { id: 3, name: 'Charlie', age: 35, active: true },
  { id: 4, name: 'David', age: 20, active: true }
];
```
 
3. Thực hiện các yêu cầu:
   - Dùng `map` để tạo mảng tên users
   - Dùng `filter` để lấy users active
   - Dùng `reduce` để tính tổng tuổi
   - Dùng `find` để tìm user có id = 2
   - Dùng `some` để kiểm tra có user nào < 18 tuổi không
   - Dùng `every` để kiểm tra tất cả users có active không
 
#### Bài Tập 1.3: Async/Await & Promises
**Mục tiêu:** Hiểu cách xử lý bất đồng bộ
 
**Yêu cầu:**
1. Tạo file `exercises/async-practice.js`
2. Tạo các hàm giả lập API:
   - `fetchUser(id)`: Trả về user sau 1s
   - `fetchPosts(userId)`: Trả về posts của user sau 1s
   - `fetchComments(postId)`: Trả về comments sau 1s
 
3. Viết hàm `getUserData(userId)` sử dụng async/await để:
   - Lấy thông tin user
   - Lấy posts của user
   - Lấy comments của post đầu tiên
   - Xử lý lỗi bằng try/catch
 
---
 
## ⚛️ Giai Đoạn 2: ReactJS Cơ Bản {#giai-đoạn-2}
 
### Kiến Thức Cần Nắm:
- ✅ JSX Syntax
- ✅ Components (Functional & Class)
- ✅ Props & PropTypes
- ✅ State & setState
- ✅ Event Handling
- ✅ Conditional Rendering
- ✅ Lists & Keys
- ✅ Forms & Controlled Components
- ✅ Component Lifecycle (Class Components)
 
### 📝 Bài Tập Thực Hành:
 
#### Bài Tập 2.1: Component Đầu Tiên
**Mục tiêu:** Tạo component cơ bản với JSX
 
**Yêu cầu:**
1. Tạo component `Welcome` nhận props `name` và `age`
2. Hiển thị: "Chào mừng [name], bạn [age] tuổi!"
3. Tạo component `Button` với props `text`, `onClick`, `color`
4. Tạo component `Card` hiển thị title, content, và button
 
**Cấu trúc:**
```
src/
  components/
    Welcome.js
    Button.js
    Card.js
  App.js
```
 
#### Bài Tập 2.2: State & Event Handling
**Mục tiêu:** Quản lý state và xử lý sự kiện
 
**Yêu cầu:**
1. Tạo component `Counter`:
   - Có state `count` bắt đầu từ 0
   - Nút "Tăng" để tăng count
   - Nút "Giảm" để giảm count
   - Nút "Reset" để về 0
   - Hiển thị count với màu: xanh nếu > 0, đỏ nếu < 0, đen nếu = 0
 
2. Tạo component `Toggle`:
   - Có state `isOn` (boolean)
   - Nút toggle để bật/tắt
   - Hiển thị "BẬT" hoặc "TẮT" với màu tương ứng
 
#### Bài Tập 2.3: Todo List Cơ Bản
**Mục tiêu:** Ứng dụng state và list rendering
 
**Yêu cầu:**
1. Tạo component `TodoApp`:
   - Input để nhập todo mới
   - Button "Thêm" để thêm todo
   - Danh sách todos
   - Mỗi todo có checkbox để đánh dấu hoàn thành
   - Mỗi todo có nút "Xóa"
   - Hiển thị số lượng todo chưa hoàn thành
 
2. Tính năng:
   - Todo đã hoàn thành: gạch ngang, màu xám
   - Không cho thêm todo rỗng
   - Xóa todo khi click nút Xóa
 
#### Bài Tập 2.4: Form Handling
**Mục tiêu:** Xử lý form với controlled components
 
**Yêu cầu:**
1. Tạo component `ContactForm`:
   - Input: Tên (required, min 2 ký tự)
   - Input: Email (required, phải là email hợp lệ)
   - Textarea: Tin nhắn (required, min 10 ký tự)
   - Select: Chủ đề (Hỗ trợ, Báo lỗi, Đề xuất)
   - Checkbox: Đồng ý điều khoản
   - Button Submit (disabled nếu form không hợp lệ)
 
2. Validation:
   - Hiển thị lỗi dưới mỗi field khi không hợp lệ
   - Chỉ enable submit khi tất cả đều hợp lệ
   - Khi submit thành công, hiển thị thông báo và reset form
 
#### Bài Tập 2.5: Conditional Rendering
**Mục tiêu:** Render có điều kiện
 
**Yêu cầu:**
1. Tạo component `LoginStatus`:
   - Có state `isLoggedIn` và `username`
   - Nếu chưa đăng nhập: hiển thị form đăng nhập (username, password)
   - Nếu đã đăng nhập: hiển thị "Xin chào [username]" và nút "Đăng xuất"
   - Validation: username và password không được rỗng
 
2. Tạo component `Notification`:
   - Nhận props `type` ('success', 'error', 'warning', 'info')
   - Nhận props `message`
   - Hiển thị icon và màu tương ứng với type
   - Có nút đóng (X)
 
---
 
## 🎨 Giai Đoạn 3: ReactJS Trung Cấp {#giai-đoạn-3}
 
### Kiến Thức Cần Nắm:
- ✅ Hooks (useState, useEffect, useContext, useReducer)
- ✅ Custom Hooks
- ✅ Context API
- ✅ React Router
- ✅ Styling (CSS Modules, Styled Components)
- ✅ Performance Optimization (useMemo, useCallback)
- ✅ Error Boundaries
- ✅ Higher-Order Components (HOC)
 
### 📝 Bài Tập Thực Hành:
 
#### Bài Tập 3.1: Hooks - useState & useEffect
**Mục tiêu:** Thành thạo useState và useEffect
 
**Yêu cầu:**
1. Tạo component `Timer`:
   - Đếm ngược từ 60 giây về 0
   - Nút "Start", "Pause", "Reset"
   - Tự động dừng khi về 0
   - Hiển thị định dạng MM:SS
 
2. Tạo component `WindowSize`:
   - Hiển thị kích thước cửa sổ hiện tại
   - Tự động cập nhật khi resize
   - Sử dụng useEffect để cleanup event listener
 
3. Tạo component `FetchData`:
   - Fetch data từ API (JSONPlaceholder: https://jsonplaceholder.typicode.com/posts)
   - Hiển thị loading state
   - Hiển thị error nếu có
   - Hiển thị danh sách posts khi thành công
 
#### Bài Tập 3.2: Custom Hooks
**Mục tiêu:** Tạo và sử dụng custom hooks
 
**Yêu cầu:**
1. Tạo custom hook `useLocalStorage`:
   - Lưu và lấy giá trị từ localStorage
   - Tự động sync với state
   - Sử dụng trong component để lưu theme (dark/light)
 
2. Tạo custom hook `useFetch`:
   - Nhận URL làm tham số
   - Trả về: data, loading, error
   - Tự động fetch khi URL thay đổi
   - Sử dụng trong component để fetch users
 
3. Tạo custom hook `useDebounce`:
   - Debounce giá trị sau một khoảng thời gian
   - Sử dụng trong SearchBox để tìm kiếm sau khi user ngừng gõ 500ms
 
#### Bài Tập 3.3: Context API
**Mục tiêu:** Quản lý state global với Context
 
**Yêu cầu:**
1. Tạo ThemeContext:
   - Quản lý theme (light/dark)
   - Provider cung cấp theme và toggleTheme
   - Consumer components sử dụng theme
 
2. Tạo AuthContext:
   - Quản lý user authentication
   - Methods: login, logout, register
   - Lưu token vào localStorage
   - Protected routes sử dụng context
 
3. Ứng dụng:
   - Header: hiển thị user info và nút logout
   - Sidebar: toggle theme
   - Main content: thay đổi style theo theme
 
#### Bài Tập 3.4: React Router
**Mục tiêu:** Điều hướng trong React app
 
**Yêu cầu:**
1. Tạo ứng dụng với các routes:
   - `/` - Home page
   - `/about` - About page
   - `/products` - Danh sách sản phẩm
   - `/products/:id` - Chi tiết sản phẩm
   - `/contact` - Contact page
   - `/login` - Login page
   - `/dashboard` - Dashboard (protected)
 
2. Tính năng:
   - Navigation bar với links
   - Active link highlighting
   - Protected route cho dashboard
   - Redirect sau login
   - 404 page cho routes không tồn tại
   - Breadcrumbs cho product detail
 
#### Bài Tập 3.5: Performance Optimization
**Mục tiêu:** Tối ưu hiệu suất với useMemo và useCallback
 
**Yêu cầu:**
1. Tạo component `ExpensiveList`:
   - Render danh sách 1000 items
   - Mỗi item có tính toán phức tạp (ví dụ: tìm số nguyên tố)
   - Sử dụng useMemo để cache kết quả tính toán
   - So sánh performance với và không có useMemo
 
2. Tạo component `Parent` và `Child`:
   - Parent truyền callback function cho Child
   - Child là memo component
   - Sử dụng useCallback để tránh re-render không cần thiết
   - Thêm counter để test re-render
 
3. Tạo component `SearchFilter`:
   - Input search
   - Filter danh sách lớn (1000+ items)
   - Sử dụng useMemo để cache filtered list
   - Hiển thị số lượng kết quả
 
#### Bài Tập 3.6: Todo App Nâng Cao
**Mục tiêu:** Tổng hợp kiến thức trung cấp
 
**Yêu cầu:**
1. Tạo Todo App với:
   - Thêm, sửa, xóa todo
   - Đánh dấu hoàn thành
   - Filter: All, Active, Completed
   - Search todos
   - Lưu vào localStorage
   - Drag & drop để sắp xếp (optional)
 
2. Sử dụng:
   - useReducer để quản lý state phức tạp
   - Context API để share state
   - Custom hooks
   - useMemo/useCallback để optimize
   - React Router cho các views khác nhau
 
---
 
## 🔥 Giai Đoạn 4: ReactJS Nâng Cao {#giai-đoạn-4}
 
### Kiến Thức Cần Nắm:
- ✅ Advanced Hooks (useRef, useImperativeHandle, useLayoutEffect)
- ✅ React Patterns (Render Props, Compound Components)
- ✅ State Management (Redux, Zustand, Jotai)
- ✅ Server State (React Query, SWR)
- ✅ Code Splitting & Lazy Loading
- ✅ Testing (Jest, React Testing Library)
- ✅ TypeScript với React
- ✅ Advanced Performance (React.memo, React.lazy, Suspense)
 
### 📝 Bài Tập Thực Hành:
 
#### Bài Tập 4.1: Advanced Hooks
**Mục tiêu:** Sử dụng các hooks nâng cao
 
**Yêu cầu:**
1. Tạo component `FocusInput`:
   - Sử dụng useRef để focus input khi component mount
   - Tạo custom hook `useFocus` để quản lý focus
 
2. Tạo component `VideoPlayer`:
   - Sử dụng useRef để control video element
   - Play, Pause, Seek, Volume controls
   - Hiển thị current time và duration
 
3. Tạo component `MeasureElement`:
   - Sử dụng useRef và useLayoutEffect
   - Đo kích thước của element
   - Hiển thị width, height, position
 
4. Tạo component `ImperativeHandleExample`:
   - Parent component control child component
   - Sử dụng useImperativeHandle để expose methods
 
#### Bài Tập 4.2: Redux State Management
**Mục tiêu:** Quản lý state với Redux Toolkit
 
**Yêu cầu:**
1. Setup Redux store với Redux Toolkit
 
2. Tạo slice cho:
   - `authSlice`: login, logout, user info
   - `todoSlice`: CRUD operations
   - `cartSlice`: thêm, xóa, update số lượng sản phẩm
 
3. Tạo ứng dụng E-commerce mini:
   - Product list page
   - Product detail page
   - Shopping cart
   - Checkout page
   - User authentication
 
4. Sử dụng:
   - Redux DevTools
   - Async thunks cho API calls
   - Selectors với reselect
 
#### Bài Tập 4.3: React Query
**Mục tiêu:** Quản lý server state với React Query
 
**Yêu cầu:**
1. Setup React Query
 
2. Tạo các queries:
   - Fetch users list
   - Fetch user detail
   - Fetch posts của user
   - Infinite scroll cho posts
 
3. Tạo mutations:
   - Create user
   - Update user
   - Delete user
   - Optimistic updates
 
4. Tính năng:
   - Loading states
   - Error handling
   - Cache management
   - Refetch on focus
   - Polling
 
#### Bài Tập 4.4: Code Splitting & Lazy Loading
**Mục tiêu:** Tối ưu bundle size
 
**Yêu cầu:**
1. Tạo ứng dụng với:
   - Lazy load routes
   - Lazy load heavy components
   - Lazy load images
   - Suspense boundaries
 
2. So sánh:
   - Bundle size trước và sau
   - Load time
   - Performance metrics
 
3. Tạo loading skeletons cho lazy components
 
#### Bài Tập 4.5: Testing
**Mục tiêu:** Viết tests cho React components
 
**Yêu cầu:**
1. Setup Jest và React Testing Library
 
2. Viết tests cho:
   - Component rendering
   - User interactions (click, type, submit)
   - Props và state changes
   - Async operations
   - Context providers
   - Custom hooks
 
3. Test coverage:
   - Đạt ít nhất 80% coverage
   - Test edge cases
   - Test error scenarios
 
4. Components cần test:
   - Counter component
   - TodoApp
   - Form components
   - Custom hooks
 
#### Bài Tập 4.6: TypeScript với React
**Mục tiêu:** Type safety với TypeScript
 
**Yêu cầu:**
1. Convert một React app sang TypeScript
 
2. Type definitions cho:
   - Props interfaces
   - State types
   - Event handlers
   - Context types
   - Custom hooks
   - API responses
 
3. Sử dụng:
   - Generic types
   - Utility types (Partial, Pick, Omit)
   - Type guards
   - Enums
 
4. Tạo type-safe component library
 
---
 
## 🏆 Giai Đoạn 5: Chuyên Sâu & Best Practices {#giai-đoạn-5}
 
### Kiến Thức Cần Nắm:
- ✅ Design Patterns trong React
- ✅ Architecture Patterns
- ✅ Micro-frontends
- ✅ Server Components (Next.js 13+)
- ✅ Advanced Performance Techniques
- ✅ Accessibility (a11y)
- ✅ Security Best Practices
- ✅ SEO Optimization
 
### 📝 Bài Tập Thực Hành:
 
#### Bài Tập 5.1: Design Patterns
**Mục tiêu:** Áp dụng design patterns
 
**Yêu cầu:**
1. Render Props Pattern:
   - Tạo component `DataFetcher` sử dụng render props
   - Tạo component `MouseTracker` với render props
 
2. Compound Components:
   - Tạo `Tabs` component với compound pattern
   - Tạo `Accordion` component
 
3. Higher-Order Components:
   - Tạo HOC `withAuth` để protect routes
   - Tạo HOC `withLoading` để handle loading state
   - Tạo HOC `withErrorBoundary`
 
4. Custom Hooks Pattern:
   - Tạo hook library với các hooks thường dùng
   - Document với JSDoc
 
#### Bài Tập 5.2: Architecture - Feature-Based
**Mục tiêu:** Tổ chức code theo feature
 
**Yêu cầu:**
1. Refactor ứng dụng theo feature-based structure:
```
src/
  features/
    auth/
      components/
      hooks/
      services/
      types/
    todos/
      components/
      hooks/
      services/
      types/
  shared/
    components/
    hooks/
    utils/
    types/
```
 
2. Mỗi feature có:
   - Components riêng
   - Custom hooks
   - API services
   - Types/interfaces
   - Tests
 
3. Shared folder chứa:
   - Common components (Button, Input, Modal)
   - Utility functions
   - Constants
   - Types chung
 
#### Bài Tập 5.3: Performance Optimization Nâng Cao
**Mục tiêu:** Tối ưu hiệu suất toàn diện
 
**Yêu cầu:**
1. Analyze bundle:
   - Sử dụng webpack-bundle-analyzer
   - Identify large dependencies
   - Optimize imports
 
2. Implement:
   - Virtual scrolling cho long lists
   - Image lazy loading và optimization
   - Memoization strategies
   - Code splitting chiến lược
   - Service Workers cho caching
 
3. Measure:
   - Lighthouse scores
   - Core Web Vitals
   - Before/after metrics
 
#### Bài Tập 5.4: Accessibility (a11y)
**Mục tiêu:** Tạo ứng dụng accessible
 
**Yêu cầu:**
1. Audit ứng dụng với:
   - axe DevTools
   - Lighthouse accessibility audit
   - Screen reader testing
 
2. Implement:
   - ARIA labels và roles
   - Keyboard navigation
   - Focus management
   - Color contrast
   - Semantic HTML
   - Alt text cho images
 
3. Tạo accessible components:
   - Modal với focus trap
   - Dropdown menu với keyboard support
   - Form với proper labels
   - Skip links
 
#### Bài Tập 5.5: Dự Án Full-Stack
**Mục tiêu:** Xây dựng ứng dụng hoàn chỉnh
 
**Yêu cầu:**
1. Tạo ứng dụng Social Media Mini:
   - Authentication (JWT)
   - User profiles
   - Posts (create, read, update, delete)
   - Comments
   - Likes
   - Follow/Unfollow
   - Real-time notifications (WebSocket)
 
2. Tech stack:
   - Frontend: React + TypeScript
   - State: Redux Toolkit + React Query
   - Routing: React Router
   - Styling: Tailwind CSS hoặc Styled Components
   - Backend: Node.js/Express hoặc Next.js API routes
   - Database: MongoDB hoặc PostgreSQL
 
3. Features:
   - Responsive design
   - Dark mode
   - Image upload
   - Infinite scroll
   - Search functionality
   - Error boundaries
   - Loading states
   - Error handling
 
4. Best practices:
   - Clean code
   - TypeScript
   - Testing
   - Documentation
   - Git workflow
   - CI/CD (optional)
 
---
 
## 🛠️ Giai Đoạn 6: Ecosystem & Tools {#giai-đoạn-6}
 
### Kiến Thức Cần Nắm:
- ✅ Next.js (SSR, SSG, ISR)
- ✅ Gatsby
- ✅ React Native (mobile)
- ✅ Storybook
- ✅ Testing Tools (Cypress, Playwright)
- ✅ Build Tools (Vite, Webpack)
- ✅ Styling Solutions (Tailwind, Emotion, CSS-in-JS)
- ✅ Form Libraries (React Hook Form, Formik)
 
### 📝 Bài Tập Thực Hành:
 
#### Bài Tập 6.1: Next.js
**Mục tiêu:** Xây dựng ứng dụng với Next.js
 
**Yêu cầu:**
1. Tạo Next.js app với:
   - Pages Router
   - API Routes
   - Server-side Rendering (SSR)
   - Static Site Generation (SSG)
   - Incremental Static Regeneration (ISR)
 
2. Features:
   - Blog với markdown files
   - Dynamic routes
   - Image optimization
   - SEO optimization
   - API integration
 
3. Migrate sang App Router (Next.js 13+):
   - Server Components
   - Client Components
   - Streaming
   - Server Actions
 
#### Bài Tập 6.2: React Hook Form
**Mục tiêu:** Xử lý form hiệu quả
 
**Yêu cầu:**
1. Tạo form phức tạp với React Hook Form:
   - Multi-step form
   - Dynamic fields
   - Field arrays
   - Validation với Yup hoặc Zod
   - Error handling
   - Submit với async operations
 
2. So sánh với controlled components:
   - Performance
   - Code complexity
   - Re-renders
 
#### Bài Tập 6.3: Styling Solutions
**Mục tiêu:** So sánh các cách styling
 
**Yêu cầu:**
1. Tạo cùng một component với:
   - CSS Modules
   - Styled Components
   - Emotion
   - Tailwind CSS
 
2. So sánh:
   - Bundle size
   - Developer experience
   - Performance
   - Maintainability
 
3. Tạo design system với một trong các solutions trên
 
#### Bài Tập 6.4: Storybook
**Mục tiêu:** Component documentation và testing
 
**Yêu cầu:**
1. Setup Storybook
 
2. Tạo stories cho:
   - Button component (các variants)
   - Input component
   - Modal component
   - Card component
 
3. Add-ons:
   - Controls
   - Actions
   - Accessibility
   - Viewport
 
4. Document props và usage
 
#### Bài Tập 6.5: E2E Testing
**Mục tiêu:** Testing end-to-end
 
**Yêu cầu:**
1. Setup Cypress hoặc Playwright
 
2. Viết tests cho:
   - User authentication flow
   - CRUD operations
   - Form submissions
   - Navigation
   - Error scenarios
 
3. Visual regression testing
 
4. CI/CD integration
 
---
 
## 📚 Tài Nguyên Học Tập
 
### Tài Liệu Chính Thức:
- [React Official Docs](https://react.dev/)
- [React Beta Docs](https://beta.react.dev/)
 
### Khóa Học:
- React - The Complete Guide (Udemy)
- Epic React (Kent C. Dodds)
- Frontend Masters
 
### Practice Platforms:
- [React Challenges](https://github.com/alexgurr/react-coding-challenges)
- [Frontend Mentor](https://www.frontendmentor.io/)
- [Codewars](https://www.codewars.com/)
 
### Communities:
- React Vietnam Facebook Group
- Stack Overflow
- Reddit r/reactjs
- Discord Reactiflux
 
---
 
## ✅ Checklist Tiến Độ
 
### Giai Đoạn 1: Nền Tảng
- [ ] Hoàn thành 3 bài tập ES6+
- [ ] Hiểu rõ arrow functions, destructuring, spread
- [ ] Thành thạo array methods
- [ ] Nắm vững async/await
 
### Giai Đoạn 2: React Cơ Bản
- [ ] Hoàn thành 5 bài tập components
- [ ] Hiểu JSX và cách hoạt động
- [ ] Thành thạo props và state
- [ ] Xử lý được events và forms
 
### Giai Đoạn 3: React Trung Cấp
- [ ] Hoàn thành 6 bài tập hooks và patterns
- [ ] Thành thạo tất cả hooks cơ bản
- [ ] Sử dụng được Context API
- [ ] Setup được React Router
 
### Giai Đoạn 4: React Nâng Cao
- [ ] Hoàn thành 6 bài tập nâng cao
- [ ] Hiểu và sử dụng Redux
- [ ] Thành thạo React Query
- [ ] Viết được tests
 
### Giai Đoạn 5: Chuyên Sâu
- [ ] Hoàn thành 5 bài tập patterns
- [ ] Xây dựng được ứng dụng full-stack
- [ ] Tối ưu performance
- [ ] Implement accessibility
 
### Giai Đoạn 6: Ecosystem
- [ ] Hoàn thành 5 bài tập tools
- [ ] Thành thạo Next.js
- [ ] Sử dụng được các tools phổ biến
- [ ] Setup được testing environment
 
---
 
## 🎯 Lời Khuyên
 
1. **Thực hành thường xuyên**: Code mỗi ngày, dù chỉ 30 phút
2. **Xây dựng projects**: Tạo các dự án thực tế để áp dụng kiến thức
3. **Đọc code**: Xem code của các open-source projects
4. **Viết lại**: Thử viết lại code cũ với kiến thức mới
5. **Giải thích**: Dạy lại người khác giúp hiểu sâu hơn
6. **Theo dõi updates**: React thay đổi nhanh, cập nhật thường xuyên
7. **Tham gia community**: Học hỏi từ developers khác
 
---
 
**Chúc bạn học tập thành công! 🚀**
 
*Lưu ý: Roadmap này là hướng dẫn, bạn có thể điều chỉnh theo tốc độ và nhu cầu của mình.*
 
