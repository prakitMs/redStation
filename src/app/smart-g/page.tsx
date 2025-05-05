export default function SmartG() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[380px] md:h-[480px] flex items-center justify-center bg-gradient-to-b from-[#2d437a]/60 via-[#2d437a]/10 to-white overflow-hidden">
        <img
          src="https://image.makewebeasy.net/makeweb/m_1920x0/1MeCnUCUh/DefaultData/SmartG10_%E0%B8%AA%E0%B8%B3%E0%B9%80%E0%B8%99%E0%B8%B2_4.jpg?v=202405291424"
          alt="bg"
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        />
        <div className="relative z-10 flex flex-col md:flex-row gap-8 items-center w-full max-w-5xl px-6">
          <img
            src="/icons/logo.png"
            alt="Logo big"
            className="w-40 md:w-60 drop-shadow-lg"
          />
          <div className="text-center md:text-left max-w-md">
            <h1 className="text-3xl md:text-4xl font-bold mb-2 drop-shadow text-[#2d437a]">
              Smart G
            </h1>
            <h2 className="text-lg md:text-xl text-[#42bab6] font-semibold mb-4 drop-shadow">
              Data solutions for success in the future world
            </h2>
            <p className="text-gray-800 text-sm md:text-base leading-relaxed mb-4">
              Smart G Technology นำเสนอโซลูชันอัจฉริยะที่ผสาน IoT, AI, Big Data
              เพื่อยกระดับการจัดการข้อมูล เพิ่มประสิทธิภาพ ลดต้นทุน
              และสร้างความยั่งยืนให้กับองค์กร
            </p>
            <a
              href="https://www.smartgtechnology.com/"
              className="bg-[#95a257] hover:bg-[#42bab6] transition text-white font-bold py-2 px-6 rounded-full shadow uppercase"
            >
              ติดต่อเรา
            </a>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="flex-1 w-full max-w-7xl mx-auto">
        {/* Section: Intro */}
        <section className="py-12 md:py-20 flex flex-col md:flex-row items-center gap-10 px-4">
          <div className="flex-1 text-[#2d437a] space-y-5 md:pr-10">
            <h3 className="text-2xl md:text-3xl font-extrabold mb-2">
              เราคือใคร?
            </h3>
            <p className="leading-relaxed text-gray-700 text-base">
              Smart G รวมประสบการณ์ในวงการ IoT, AI และ Big Data มากกว่า 16 ปี
              ให้บริการโซลูชันที่ทันสมัยเพื่อสร้าง digital transformation
              ให้กับธุรกิจคุณ ทั้งในระดับโรงงาน เมืองอัจฉริยะ
              และโครงสร้างพื้นฐาน
            </p>
            <ul className="mt-4 pl-6 list-disc text-gray-600">
              <li>วิเคราะห์ข้อมูลแบบเรียลไทม์</li>
              <li>คุมอุปกรณ์ระยะไกลด้วย AI/Chatbot</li>
              <li>สร้างความปลอดภัยและประหยัดทรัพยากร</li>
            </ul>
          </div>
          <div className="flex-1 flex justify-center">
            <img
              className="rounded-lg shadow-xl w-full max-w-md border"
              src="https://image.makewebeasy.net/makeweb/m_1920x0/1MeCnUCUh/DefaultData/0b235f41-6810-44b6-a155-948d1d1bdff6.jpg?v=202405291424"
              alt="SmartG team"
            />
          </div>
        </section>

        {/* Section: Data Flow/Features */}
        <section className="bg-[#2d437a] text-white py-16 px-4 rounded-t-3xl mt-12 relative overflow-visible">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 drop-shadow">
              Data Realtime Flow
            </h2>
            <div className="flex flex-col md:flex-row justify-center gap-10 md:gap-6 items-stretch">
              <div className="flex-1 bg-white text-[#2d437a] rounded-xl p-6 flex flex-col items-center shadow hover:scale-105 transition">
                <img
                  src="https://ext.same-assets.com/1062710418/417456852.webp"
                  alt="Realtime sensor"
                  className="w-20 mb-3"
                />
                <div className="font-bold text-lg mb-1">Sensor/Device</div>
                <div className="text-sm text-gray-600">
                  ตรวจจับข้อมูล ณ จุด เก็บข้อมูล เซ็นเซอร์ IoT
                </div>
              </div>
              <div className="flex-1 bg-white text-[#2d437a] rounded-xl p-6 flex flex-col items-center shadow hover:scale-105 transition">
                <img
                  src="https://ext.same-assets.com/1062710418/3077850028.jpeg"
                  alt="Server"
                  className="w-20 mb-3"
                />
                <div className="font-bold text-lg mb-1">Data Server</div>
                <div className="text-sm text-gray-600">
                  ส่งข้อมูลขึ้นเซิร์ฟเวอร์ ประมวลผล & จัดเก็บ
                </div>
              </div>
              <div className="flex-1 bg-white text-[#2d437a] rounded-xl p-6 flex flex-col items-center shadow hover:scale-105 transition">
                <img
                  src="icons/chatbot.jpeg"
                  alt="AI Control"
                  className="w-20 mb-3"
                />
                <div className="font-bold text-lg mb-1">
                  AI / Chatbot / Control
                </div>
                <div className="text-sm text-gray-600">
                  ควบคุมอุปกรณ์ อัตโนมัติผ่าน AI หรือแชทบอท
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section: Feature Cards */}
        <section className="bg-white py-14 px-4">
          <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">
            <div className="bg-[#f8fafa] rounded-lg shadow border p-6 flex flex-col items-center">
              <img
                src="https://ext.same-assets.com/1062710418/2869482809.jpeg"
                alt="Board"
                className="w-28 mb-3"
              />
              <h4 className="font-semibold text-lg mb-2 text-[#2d437a]">
                Smart IoT Board
              </h4>
              <ul className="list-disc text-left pl-6 text-sm leading-relaxed text-gray-600">
                <li>ฮาร์ดแวร์คุณภาพสูง สั่งงานระยะไกล</li>
                <li>สนับสนุนโปรโตคอลมาตรฐาน</li>
                <li>เหมาะกับโรงงาน เมืองอัจฉริยะ</li>
              </ul>
            </div>
            <div className="bg-[#f8fafa] rounded-lg shadow border p-6 flex flex-col items-center">
              <img
                src="icons/3d.jpeg"
                alt="Custom System"
                className="w-28 mb-3"
              />
              <h4 className="font-semibold text-lg mb-2 text-[#2d437a]">
                3D Control System
              </h4>
              <ul className="list-disc text-left pl-6 text-sm leading-relaxed text-gray-600">
                <li>ควบคุม-ดูแลทุกกระบวนการแบบ 3 มิติ</li>
                <li>ตั้งค่าได้เอง/ปรับขยายตามธุรกิจคุณ</li>
                <li>ปลอดภัยและเชื่อถือได้</li>
              </ul>
            </div>
            <div className="bg-[#f8fafa] rounded-lg shadow border p-6 flex flex-col items-center">
              <img src="icons/smartmap.jpeg" alt="Map" className="w-28 mb-3" />
              <h4 className="font-semibold text-lg mb-2 text-[#2d437a]">
                Smart G Map
              </h4>
              <ul className="list-disc text-left pl-6 text-sm leading-relaxed text-gray-600">
                <li>ผสาน IoT + Big Data + AI วิเคราะห์แบบเรียลไทม์</li>
                <li>ดูแลทั้งเมือง โรงงาน อาคาร</li>
                <li>แสดงผลแบบแผนที่อัจฉริยะ</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section: Quote/New Solution */}
        <section className="py-12 bg-gradient-to-r from-slate-50 via-[#e4e4ec] to-[#c8d0d0] text-center">
          <h3 className="text-2xl font-bold text-[#2d437a] mb-3">
            “New Solutione Product For Future.”
          </h3>
          <p className="text-[#42bab6] text-lg">
            “Future-proof solutions that only Smart G can provide.”
          </p>
        </section>

        {/* Section: Product Details & Media */}
        <section className="container mx-auto py-14 px-4 grid md:grid-cols-2 gap-10 items-center">
          <div className="bg-white rounded-lg shadow p-5">
            <h4 className="text-lg font-bold mb-2 text-[#2d437a]">
              Smart G 3D Custom Control System
            </h4>
            <ul className="list-decimal pl-6 text-gray-700 text-sm space-y-1">
              <li>มองเห็นภาพใหญ่แบบ 3D ของทุกกระบวนการ</li>
              <li>ควบคุมและแจ้งเตือนสถานะเครื่องจักรทันที</li>
              <li>ปรับ config ได้เองทุกฟีเจอร์</li>
              <li>รองรับการเติบโตและขยายเครือข่าย</li>
            </ul>
          </div>
          <div className="aspect-video rounded-xl shadow overflow-hidden">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/ud4YZ6f7Arc?start=2"
              title="Factory Smart G"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#2d437a] text-white pt-12 pb-6 px-4 mt-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:justify-between items-center md:items-start gap-10 w-full">
          <div className="max-w-xs w-full mb-4 md:mb-0 flex flex-col items-center md:items-start">
            <img
              src="https://ext.same-assets.com/1062710418/3165826560.png"
              alt="MS Track Logo"
              className="w-28 mb-3"
            />
            <address className="text-xs not-italic leading-relaxed text-gray-200">
              MS Track(Thailand).Co.,Ltd
              <br />
              Head Office: 717/63 Moo 5, Hua Thale Subdistrict, Mueang Nakhon
              Ratchasima District,
              <br />
              Nakhon Ratchasima Province, 30000, Thailand
              <br />
              Tel : 044 300 659 , +66 88 114 3656, +88 93 325 4422
              <br />
              Branch Office: 32 Prachanivet 3, Soi 8/3, Yaek 6, Tha Sai
              Subdistrict, Mueang Nonthaburi District, Nonthaburi Province,
              11000, Thailand
            </address>
          </div>
          <div className="flex-1 flex flex-col md:items-start items-center gap-3">
            <div className="font-bold mb-2">Our Services</div>
            <div className="grid grid-cols-2 gap-1 text-xs">
              <a href="#" className="hover:underline">
                Home
              </a>
              <a href="#" className="hover:underline">
                About us
              </a>
              <a href="#" className="hover:underline">
                Product
              </a>
              <a href="#" className="hover:underline">
                New Update
              </a>
              <a href="#" className="hover:underline">
                Service
              </a>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="font-bold mb-2">Subscribe</div>
            <div className="flex gap-3 mb-2">
              <a
                href="https://www.facebook.com/smartgtechnology/"
                aria-label="Facebook"
              >
                <img
                  width={24}
                  src="https://ext.same-assets.com/1062710418/4252861238.svg"
                  alt="Facebook"
                />
              </a>
              <a href="https://www.instagram.com" aria-label="Instagram">
                <img
                  width={24}
                  src="https://ext.same-assets.com/1062710418/3301625649.svg"
                  alt="Instagram"
                />
              </a>
              <a
                href="https://www.youtube.com/@SmartGtechnology"
                aria-label="YouTube"
              >
                <img
                  width={24}
                  src="https://ext.same-assets.com/1062710418/3394157246.svg"
                  alt="YouTube"
                />
              </a>
              <a
                href="https://line.me/R/ti/p/~https://lin.ee/pCbRsoI"
                aria-label="Line"
              >
                <img
                  width={24}
                  src="https://ext.same-assets.com/1062710418/1787624407.svg"
                  alt="Line"
                />
              </a>
            </div>
            <img
              src="https://ext.same-assets.com/1062710418/2575353403.webp"
              alt="QR line"
              className="w-16 rounded shadow-lg"
            />
          </div>
        </div>
        <div className="text-xs text-center mt-8 opacity-60">
          Copyright | All Rights Reserved | Powered by MWE
          <br />
          Powered By{" "}
          <a
            href="https://www.makewebeasy.com/th"
            className="underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            MakeWebEasy
          </a>
        </div>
      </footer>
    </div>
  );
}
