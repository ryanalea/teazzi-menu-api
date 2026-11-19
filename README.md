# ExpressJS CRUD Teazzi Menu

Project backend sederhana untuk manajemen menu minuman Teazzi menggunakan **Node.js, ExpressJS, dan MongoDB**.

## Tech Stack

- Node.js
- ExpressJS
- MongoDB
- Mongoose

## Fitur

- Create: Menambahkan menu minuman baru.
- Read: Mengambil seluruh menu minuman dan detail minuman berdasarkan ID.
- Update: Memperbarui data menu minuman.
- Delete: Menghapus data menu minuman.

## Prasyarat & Tools

- [Node.js](https://nodejs.org/)
- [MongoDB & MongoDB Compass](https://www.mongodb.com/docs/compass/install/?operating-system=windows)
- [Postman](https://www.postman.com/downloads/)

## Instalasi & Menjalankan Server

1. Masuk ke folder project dan install dependensi:

```bash
cd teazzi-menu-api
npm install
```

2. Buka aplikasi **MongoDB Compass** dan hubungkan ke MongoDB lokal:

```text
mongodb://localhost:27017
```

3. Jalankan server:

```bash
node app.js
```

atau menggunakan npm script:

```bash
npm start
```

Server berjalan di:

```text
http://localhost:3000
```

## API Endpoint

| Method | Endpoint          | Status                     | Deskripsi                                    |
| ------ | ----------------- | -------------------------- | -------------------------------------------- |
| GET    | `/api/drinks`     | `200 OK`                   | Mengambil semua menu minuman                 |
| GET    | `/api/drinks/:id` | `200 OK` / `404 Not Found` | Mengambil detail menu minuman berdasarkan ID |
| POST   | `/api/drinks`     | `201 Created`              | Menambahkan menu minuman baru                |
| PUT    | `/api/drinks/:id` | `200 OK` / `404 Not Found` | Memperbarui data menu minuman                |
| DELETE | `/api/drinks/:id` | `200 OK` / `404 Not Found` | Menghapus menu minuman                       |

## Pengujian di Postman

Untuk request dengan method `POST` dan `PUT`, tambahkan header:

- **Key**: `Content-Type`
- **Value**: `application/json`

Contoh Body (`raw` JSON):

```json
{
  "namaMinuman": "Four Seasons Oolong Milk Tea",
  "kategori": "Milk Tea",
  "sugarLevel": "Less Sugar (70%)",
  "harga": 28000,
  "tersedia": true
}
```

## Database

Database: `teazzi_db`

Collection: `drinks`

API dapat diuji menggunakan Postman.

---
