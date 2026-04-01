class Product {
    constructor(id, name, price) {
        this.id = id;        // เราจะใช้ ID เป็น Key ในการจัดเรียง
        this.name = name;
        this.price = price;
        this.left = null;    // ลูกทางซ้าย (ค่าน้อยกว่า)
        this.right = null;   // ลูกทางขวา (ค่ามากกว่า)
    }
}

class ProductBST {
    constructor() {
        this.root = null;
    }

    // ฟังก์ชันสำหรับเพิ่มสินค้า
    insert(id, name, price) {
        const newNode = new Product(id, name, price);
        if (this.root === null) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode);
        }
    }

    insertNode(node, newNode) {
        console.log(node , newNode);
        if (newNode.id < node.id) {
            if (node.left === null) node.left = newNode;
            else this.insertNode(node.left, newNode);
        } else {
            if (node.right === null) node.right = newNode;
            else this.insertNode(node.right, newNode);
        }
    }

    // เพิ่ม method นี้เข้าไปใน class ProductBST
    search(id) {
        return this.searchNode(this.root, id);
    }

    searchNode(node, id) {
        // 1. ถ้าหาไม่เจอ
        if (node === null) return null;

        // 2. ถ้าเจอ ID ที่ตรงกัน
        if (id === node.id) return node;

        // 3. ถ้า ID ที่ตามหาน้อยกว่า ให้ไปทางซ้าย
        if (id < node.id) {
            return this.searchNode(node.left, id);
        } 
        // 4. ถ้า ID ที่ตามหามากกว่า ให้ไปทางขวา
        else {
            return this.searchNode(node.right, id);
        }
    }
}


const inventory = new ProductBST();

// เพิ่มสินค้าเข้าสู่ระบบ
inventory.insert(105, "Keyboard", 2500);
inventory.insert(102, "Mouse", 1200);
inventory.insert(110, "Monitor", 8500);
inventory.insert(101, "Mousepad", 300);

// ทดสอบค้นหา
const targetId = 110;
const result = inventory.search(targetId);

if (result) {
    console.log(`เจอสินค้า: ${result.name}, ราคา: ${result.price} บาท`);
} else {
    console.log("ไม่พบสินค้าที่คุณต้องการ");
}

