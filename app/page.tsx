import Image from "next/image";
import Link from "next/link";
import Footer from "../components/Footer";
import Header from "../components/Header";
import SquigglyLines from "../components/SquigglyLines";

export default function HomePage() {
  return (
    <div className="flex max-w-6xl mx-auto flex-col items-center justify-center py-2 min-h-screen">
      <Header />
      <main className="flex flex-1 w-full flex-col items-center justify-center text-center px-4 sm:mt-10 mt-10 background-gradient">
        <h1 className="mx-auto max-w-4xl font-display text-5xl font-bold tracking-normal text-gray-600 sm:text-7xl">
          تصميم غرفة باستخدام{" "}
          <span className="relative whitespace-nowrap text-indigo-600">
            <SquigglyLines />
            <span className="relative">الذكاء الاصطناعي</span>
          </span>{" "}
          <span>في ثوانٍ...</span>
        </h1>
        <Link
          className="bg-indigo-600 rounded-2xl text-2xl text-white font-medium px-4 py-3 sm:mt-10 mt-8 hover:bg-indigo-500 transition"
          href="/dream"
        >
          ابدأ التصميم الآن
        </Link>
        <h2 className="mx-auto mt-12 font-medium max-w-xl text-2xl sm:text-gray-600 text-gray-700 leading-7">
          التقط صورة لغرفتك وانظر كيف تبدو بمختلف الأشكال <strong>مجانًا</strong>.
        </h2>
        <div className="flex justify-between items-center w-full flex-col sm:mt-10 mt-6">
          <div className="flex flex-col space-y-10 mt-4 mb-16">
            <div className="flex sm:space-x-8 sm:flex-row flex-col gap-4">
              <div>
                <h3 className="mb-2 font-medium text-2xl text-indigo-900">
                الغرفة قبل إعادة التصميم
                </h3>
                <Image
                  alt="Original photo of a room with roomGPT.io"
                  src="/original-pic.jpeg"
                  className="w-full object-cover h-96 rounded-2xl"
                  width={400}
                  height={400}
                />
              </div>
              <div className="sm:mt-0 mt-8">
                <h3 className="mb-2 font-medium text-2xl text-indigo-900">
                 الغرفة بعد إعادة التصميم 
                </h3>
                <Image
                  alt="Generated photo of a room with roomGPT.io"
                  width={400}
                  height={400}
                  src="/generated-pic.png"
                  className="w-full object-cover h-96 rounded-2xl sm:mt-0 mt-2"
                />
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
