# Sử dụng Mocha report

Nếu không cần merge: đổi thành `html: true` trong `cypress.config.ts`

> Run test xong `yarn cy-run`, chỉ cần `yarn mocha-open`

Nếu cần merge: nên dùng `html: false` trong `cypress.config.ts`

> Run test xong `yarn-cy-run`, chạy `yarn mocha-merge-export-show`

### Cơ chế: Mỗi lần chạy test xong sẽ gen ra 1 folder reports. Folder này sẽ tự clear hết khi bắt đầu chạy 1 test mới