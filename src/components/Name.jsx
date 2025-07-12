import IBH_LOGO from "../image/IBH_Logo.png"
import SaveContactButton from "./SaveContactButton"

function Name() {
  return (
    <section className='xl:pt-25 pt-15 pb-10'>
        <div className="container">
            <div>
                <h3 className='xl:text-3xl text-[20px] font-bold text-[#79BBE5] pl-10'>SHUVROW ADHIKARY</h3>
                <h3 className='xl:text-2xl text-[16px] font-semibold text-white pl-[42px] py-3 tracking-normal'>MEDICAL TECHNOLOGIST</h3>
                <h3 className='xl:text-[20px] text-[12px] font-semibold text-white pl-[65px]  tracking-normal'>(RADIOLOGY & IMAGING)</h3>
                <div className='pt-10 grid grid-cols-[150px_1fr] gap-3'>
                  <div className="xl:size-[150px] size-[100px]">
                    <img className="size-full object-cover" src={IBH_LOGO} alt="" />
                  </div>
                  <div>
                    <h3 className="text-3xl uppercase xl:tracking-[0.5em] tracking-tight leading-8 text-green-600 font-bold">IBHCCM</h3>
                    <h5 className="xl:text-[20px] text-[14px] uppercase xl:tracking-widest tracking-tight text-gray-200 xl:pr-22 pt-2">dedicated to every heartbeat with advanced cardiac care</h5>

                  </div>
                </div>
                <div className="text-center py-3 xl:text-2xl text-[15px]"><a className="text-blue-800 hover:text-white transition-all" href="https://islamibankbd.com/news-events/islami-bank-hospital-and-cardiac-center-inaugurated-in-mirpur" target="blank">ibhccm.com/mirpur</a></div>
                <div className="text-center">
                  <SaveContactButton/>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Name