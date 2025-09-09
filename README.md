# Website

Docs Pythonvn

## Installation

### Cấu hình
Trước khi build vui lòng thiết lập các thông tin sau trong file docusaurus.config.js

```js
module.exports = {
    baseUrl: '/repositories/', //repositories 
    organizationName: 'user', // User
    projectName: 'repositories', //repositories 
    deploymentBranch: 'gh-pages',
};
```

Từ project tạo thư mục tạm tmp-gh-pages và cd vào thư mục đó

```bash
mkdir ~/tmp-gh-pages
cd ~/tmp-gh-pages
```

Chuyển sang branch gh-pages:

```bash
git checkout gh-pages
```

Tiến hành xoá trống brach gh-pages

```bash
git rm -rf .
```

Tạo file README.MD với nội dung trống sau đó commit và push lên branch gh-pages

```bash
git commit -m "Init gh-pages branch"
git push gh-pages
```

Sau đó quay lại branch Chính Main

```bash
git checkout main
```

Chạy lệnh sau để build và deploy
```bash
GIT_USER=usergit GIT_PASS=your_token npm run deploy
```

Thank you!