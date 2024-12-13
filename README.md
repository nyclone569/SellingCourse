# Day 1:
Cài đặt NodeJS và dùng Vitejs để tạo dự án:
- Sử dụng framework react và dùng javascript để code.

Một cấu trúc dự án thường bao gồm các folder: assets (ảnh img, icon, css, svg), components (components dùng chung), config (chứa hằng số cho dự án mình sử dụng), hooks (chứa custom hook tự viết), layouts (chứa components dạng layout), locales (chứa file dịch), pages (chứa components dạng page), services (chứa lệnh gọi api), stores (chứa global state), utils (function helper dùng trong dự án).

Lý thuyết:
- Có 2 kiểu export: export default (chỉ export được 1 lần) và name export.
- Component là những thành phần nhỏ trên website, được phân chia tùy thuộc vào mục đích: tái sử dụng, chia nhỏ code và tùy thuộc vào chức năng. Web components do mình tự định nghĩa quy ước viết hoa chữ cái đầu.
- Props là giá trị do component cha truyền vào component con, có thể là bất kì kiểu dữ liệu nào và có thể dùng spread attributes để truyền nhanh các props {...attri}. Không thể thay đổi props, muốn thay đổi có thể dùng state để thay thế. -> Tạo ra sự đa dạng và tái sử dụng components dễ dàng hơn.
- Các kiểu style: inline css, tạo file css, css module (less, sass), styled-components, tailwind css.
- State: re-render sau mỗi lần setState, initialState là giá trị khởi tạo ban đầu và là 1 callback đc sử dụng khi logic tính toán initialState phức tạp. setState là một giá trị mới và là một callback.
- Lưu ý: không sử dụng hook trong hoặc phía sau câu điều kiện if, for, while, switch hoặc trong một function khác. Chỉ sử dụng hook ở top level của function component.
- useEffect: để thực thi side effect (logic không được ưu tiên). Có dependencyList (array) là giá trị phụ thuộc, khi thay đổi thì side effect thực thi lại.