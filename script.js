const menuData = [
    // 🍲 หมวดที่ 1: อาหารต้ม / แกง
    { id: 1, category: 'soup', name: 'ຕຳໝາກຮຸ່ງ (ตำส้มกุ้ง/ปู)', price: 25000, image: 'https://images.unsplash.com/photo-1569562211203-7798878b696f?w=500&q=80' },
    { id: 2, category: 'soup', name: 'ຕົ້ມຍຳກຸ້ງ (ต้มยำกุ้ง)', price: 45000, image: 'https://images.unsplash.com/photo-1548943487-a2e4e43b4853?w=500&q=80' },
    { id: 3, category: 'soup', name: 'ແກງໜໍ່ໄມ້ (แกงหน่อไม้)', price: 30000, image: 'https://images.unsplash.com/photo-1547592180-85f173990554?w=500&q=80' },
    { id: 4, category: 'soup', name: 'ຕົ້ມແຊ່ບກະດູກອ່ອນ (ต้มแซ่บ)', price: 35000, image: 'https://images.unsplash.com/photo-1555126634-323283e090fa?w=500&q=80' },
    { id: 5, category: 'soup', name: 'ແກງຈືດເຕົ່າຮູ້ໝູສັບ (แกงจืดเต้าหู้)', price: 25000, image: 'https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?w=500&q=80' },

    // 🍗 หมวดที่ 2: อาหารปิ้ง / ทอด
    { id: 6, category: 'grill', name: 'ປີ້ງໄກ່ລາດ (ไก่ย่าง)', price: 50000, image: 'https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?w=500&q=80' },
    { id: 7, category: 'grill', name: 'ຄໍໝູປີ້ງ (คอหมูย่าง)', price: 40000, image: 'https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?w=500&q=80' },
    { id: 8, category: 'grill', name: 'ປີນປາທະເລ (ปลาย่าง)', price: 60000, image: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=500&q=80' },
    { id: 9, category: 'grill', name: 'ເອັນໄກ່ທອດ (เอ็นไก่ทอด)', price: 30000, image: 'https://images.unsplash.com/photo-1562967914-608f82629710?w=500&q=80' },
    { id: 10, category: 'grill', name: 'ມັນຝຣັ່ງທອດ (เฟรนช์ฟรายส์)', price: 20000, image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=500&q=80' },

    // 🥗 หมวดที่ 3: อาหารยำ / ลาบ
    { id: 11, category: 'salad', name: 'ລາບໝູ (ลาบหมู)', price: 35000, image: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?w=500&q=80' },
    { id: 12, category: 'salad', name: 'ລາບງົວ (ลาบเนื้อ)', price: 40000, image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=500&q=80' },
    { id: 13, category: 'salad', name: 'ຍຳວຸ້ນເສັ້ນທະເລ (ยำวุ้นเส้น)', price: 40000, image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=500&q=80' },
    { id: 14, category: 'salad', name: 'ກຸ້ງແຊ່ນ້ຳປາ (กุ้งแช่น้ำปลา)', price: 50000, image: 'https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?w=500&q=80' },
    { id: 15, category: 'salad', name: 'ຕຳແຕງໄຂ່ຕົ້ມ (ตำแตงไข่ต้ม)', price: 20000, image: 'https://images.unsplash.com/photo-1608897013039-887f21d8c804?w=500&q=80' },

    // 🥤 หมวดที่ 4: เครื่องดื่ม
    { id: 16, category: 'drink', name: 'ເບຍລາວ ໃຫຍ່ (เบียร์ลาวใหญ่)', price: 22000, image: 'https://images.unsplash.com/photo-1608270586620-248524c67de9?w=500&q=80' },
    { id: 17, category: 'drink', name: 'ນ້ຳອັດລົມ (น้ำอัดลม)', price: 10000, image: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=500&q=80' },
    { id: 18, category: 'drink', name: 'ນ້ຳດື່ມບໍລິສຸດ (น้ำดื่ม)', price: 5000, image: 'https://images.unsplash.com/photo-1548839140-29a749e1bc4e?w=500&q=80' },
    { id: 19, category: 'drink', name: 'ຊານົມເຢັນ (ชาเย็น)', price: 15000, image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=500&q=80' },
    { id: 20, category: 'drink', name: 'ກາເຟເຢັນ (กาแฟเย็น)', price: 18000, image: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?w=500&q=80' }
];

const firebaseConfig = {
    apiKey: "AIzaSyBuSEbFvAoU3Z9X3LktX_SlIm6EMHRRtsg",
    authDomain: "my-restaurant-3da21.firebaseapp.com",
    databaseURL: "https://my-restaurant-3da21-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "my-restaurant-3da21",
    storageBucket: "my-restaurant-3da21.firebasestorage.app",
    messagingSenderId: "932377209963",
    appId: "1:932377209963:web:b2b117656e0d7e3366d52e",
    measurementId: "G-4DQHD8RLB8"
};

firebase.initializeApp(firebaseConfig);
const database = firebase.database();

const urlParams = new URLSearchParams(window.location.search);
const currentTable = urlParams.get('table') || '1';

let cart = [];

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('table-display').innerText = `ໂຕະ ${currentTable}`;
    renderMenu('all');
    listenServedItems();
});

function renderMenu(category) {
    const grid = document.getElementById('menu-grid');
    grid.innerHTML = '';
    
    const filtered = category === 'all' ? menuData : menuData.filter(m => m.category === category);
    
    filtered.forEach(item => {
        const card = document.createElement('div');
        card.className = 'menu-card';
        card.innerHTML = `
            <img src="${item.image}" class="menu-img" alt="${item.name}" onerror="this.src='https://via.placeholder.com/150?text=Food'">
            <div class="menu-info">
                <h3>${item.name}</h3>
                <p class="price">${item.price.toLocaleString()} ກີບ</p>
                <button class="btn-add" onclick="addToCart(${item.id})">➕ ເພີ່ມລາຍການ</button>
            </div>
        `;
        grid.appendChild(card);
    });
}

function filterCategory(cat, btn) {
    document.querySelectorAll('.cat-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderMenu(cat);
}

function addToCart(id) {
    const item = menuData.find(m => m.id === id);
    const existing = cart.find(c => c.id === id);
    if (existing) {
        existing.quantity += 1;
    } else {
        cart.push({ ...item, quantity: 1 });
    }
    updateCartUI();
}

function updateCartUI() {
    const cartCount = document.getElementById('cart-count');
    const cartTotal = document.getElementById('cart-total');
    const totalQty = cart.reduce((sum, item) => sum + item.quantity, 0);
    const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    
    if (cartCount) cartCount.innerText = totalQty;
    if (cartTotal) cartTotal.innerText = `${totalPrice.toLocaleString()} ກີບ`;
}

function openCartModal() {
    const modal = document.getElementById('cart-modal');
    const itemsContainer = document.getElementById('cart-items');
    itemsContainer.innerHTML = '';
    
    if (cart.length === 0) {
        itemsContainer.innerHTML = '<div style="text-align:center; padding:20px; color:#94a3b8;">ບໍ່ມີລາຍການໃນກະຕ່າ</div>';
    } else {
        cart.forEach(item => {
            itemsContainer.innerHTML += `
                <div class="cart-item">
                    <div>
                        <strong>${item.name}</strong><br>
                        <small>${item.price.toLocaleString()} ກີບ</small>
                    </div>
                    <div class="qty-controls">
                        <button onclick="changeQty(${item.id}, -1)">-</button>
                        <span>${item.quantity}</span>
                        <button onclick="changeQty(${item.id}, 1)">+</button>
                    </div>
                </div>
            `;
        });
    }
    modal.style.display = 'flex';
}

function closeCartModal() {
    document.getElementById('cart-modal').style.display = 'none';
}

function changeQty(id, delta) {
    const item = cart.find(c => c.id === id);
    if (item) {
        item.quantity += delta;
        if (item.quantity <= 0) {
            cart = cart.filter(c => c.id !== id);
        }
    }
    updateCartUI();
    openCartModal();
}

function submitOrder() {
    if (cart.length === 0) return alert('ກະລຸນາເລືອກອາຫານก่อน');
    
    const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const orderData = {
        table: currentTable,
        items: cart,
        total: totalPrice,
        time: new Date().toLocaleTimeString('lo-LA'),
        timestamp: Date.now()
    };
    
    database.ref('kitchen_orders').push(orderData).then(() => {
        alert('ສົ່ງອໍເດີ້สำเร็จแล้ว!');
        cart = [];
        updateCartUI();
        closeCartModal();
    });
}

function callStaff() {
    database.ref('service_requests').push({
        table: currentTable,
        type: 'CALL_STAFF',
        time: new Date().toLocaleTimeString('lo-LA'),
        timestamp: Date.now()
    }).then(() => alert('ຮຽກພະນັກງານเรียบร้อยแล้ว!'));
}

function requestBill() {
    database.ref(`active_tables/table_${currentTable}`).once('value', (snapshot) => {
        const tableData = snapshot.val();
        const total = tableData ? tableData.total : 0;
        database.ref('service_requests').push({
            table: currentTable,
            type: 'CHECK_BILL',
            total: total,
            time: new Date().toLocaleTimeString('lo-LA'),
            timestamp: Date.now()
        }).then(() => alert('ແຈ້ງເຊັກບິນเรียบร้อยแล้ว!'));
    });
}

function listenServedItems() {
    database.ref(`active_tables/table_${currentTable}`).on('value', (snapshot) => {
        const data = snapshot.val();
        const container = document.getElementById('served-items');
        if (data && data.items) {
            let html = `<h4>🍱 รายการที่เสิร์ฟแล้ว (รวม: ${data.total.toLocaleString()} กีบ)</h4><ul>`;
            data.items.forEach(i => {
                html += `<li>${i.name} x ${i.quantity}</li>`;
            });
            html += '</ul>';
            container.innerHTML = html;
        } else {
            container.innerHTML = '';
        }
    });
}