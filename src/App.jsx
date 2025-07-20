import React from "react";

const App = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-md text-center space-y-4">
        <h1 className="text-2xl font-bold">Selamat datang di Coinawe Bot!</h1>
        <p>Saya akan bantu kamu melakukan transaksi escrow aman.</p>
        <p>Gunakan tombol berikut untuk mengakses layanan escrow.</p>
        <div className="space-y-2">
          <script
            async
            src="https://telegram.org/js/telegram-widget.js?7"
            data-telegram-login="BOT_KAMU"
            data-size="large"
            data-userpic="false"
            data-request-access="write"
            data-auth-url="https://coinawe.site/auth/telegram"
          ></script>
        </div>
      </div>
    </div>
  );
};

export default App;
