import IBH_LOGO from "../image/IBH_Logo.png"

function Name() {
  return (
    <section className='pt-25 pb-10'>
        <div className="container">
            <div>
                <h3 className='text-3xl font-bold text-[#79BBE5] pl-10'>SHUVROW ADHIKARY</h3>
                <h3 className='text-2xl font-semibold text-white pl-[42px] py-3 tracking-normal'>MEDICAL TECHNOLOGIST</h3>
                <h3 className='text-[20px] font-semibold text-white pl-[65px]  tracking-normal'>(RADIOLOGY & IMAGING)</h3>
                <div className='pt-10 grid grid-cols-[150px_1fr] gap-3'>
                  <div className="size-[150px]">
                    <img className="size-full object-cover" src={IBH_LOGO} alt="" />
                  </div>
                  <div>
                    <h3 className="text-3xl uppercase tracking-[0.5em] leading-8 text-green-600 font-bold">IBHCCM</h3>
                    <h5 className="text-[20px] uppercase tracking-widest text-gray-200 pr-22 pt-2">dedicated to every heartbeat with advanced cardiac care</h5>

                  </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Name