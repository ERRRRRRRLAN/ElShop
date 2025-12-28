export default function TestColors() {
  return (
    <div className="p-8 space-y-8">
      <h1 className="text-4xl font-bold mb-8">Color Palette Test - UNGU GELAP</h1>
      
      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Primary Colors (Magenta-Ungu Gelap)</h2>
        <div className="grid grid-cols-5 gap-4">
          <div className="bg-primary-50 p-4 rounded text-center border">50</div>
          <div className="bg-primary-100 p-4 rounded text-center border">100</div>
          <div className="bg-primary-200 p-4 rounded text-center border">200</div>
          <div className="bg-primary-300 p-4 rounded text-center border">300</div>
          <div className="bg-primary-400 p-4 rounded text-center border text-white font-bold">400<br/>#e607d1</div>
          <div className="bg-primary-500 p-4 rounded text-center border text-white font-bold">500<br/>#cc06ba</div>
          <div className="bg-primary-600 p-4 rounded text-center border text-white font-bold">600<br/>#b306a2</div>
          <div className="bg-primary-700 p-4 rounded text-center border text-white font-bold">700<br/>#99058b</div>
          <div className="bg-primary-800 p-4 rounded text-center border text-white font-bold">800<br/>#800474</div>
          <div className="bg-primary-900 p-4 rounded text-center border text-white font-bold">900<br/>#66035d</div>
          <div className="bg-primary-950 p-4 rounded text-center border text-white font-bold">950<br/>#4d0246</div>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Buttons</h2>
        <div className="flex gap-4">
          <button className="bg-primary-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-primary-700">
            Primary Button
          </button>
          <button className="bg-primary-700 text-white px-6 py-3 rounded-xl font-semibold hover:bg-primary-800">
            Dark Button
          </button>
          <button className="bg-primary-800 text-white px-6 py-3 rounded-xl font-semibold hover:bg-primary-900">
            Darker Button
          </button>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Gradients</h2>
        <div className="h-32 bg-gradient-to-r from-primary-600 to-primary-800 rounded-xl"></div>
        <div className="h-32 bg-gradient-to-br from-primary-800 via-primary-900 to-primary-950 rounded-xl"></div>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Text Colors</h2>
        <p className="text-primary-600 text-2xl font-bold">Primary 600 Text</p>
        <p className="text-primary-700 text-2xl font-bold">Primary 700 Text</p>
        <p className="text-primary-800 text-2xl font-bold">Primary 800 Text</p>
        <p className="bg-gradient-to-r from-primary-600 to-primary-800 bg-clip-text text-transparent text-2xl font-bold">
          Gradient Text
        </p>
      </div>
    </div>
  )
}

