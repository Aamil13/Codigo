import styles from './style.module.css'

const HomeCard = ({heading, subHeading, description,img, lowerText, lowerSubText, color, bg}) => {
  return (
    <>
    <div className={`w-full md:w-1/2 lg:w-1/3 p-4 flex flex-col items-center mb-36 ${styles.firstDiv} z-0`}>
        <div className={`${styles.circle}`} style={{backgroundColor:`${bg}`, color:`${color}`}}>
            <div className={`text-center ${styles.circleContent}`}>
                <div className={`text-center ${styles.heading}`}>
                <p className='text-[8px]'>{heading}</p>
                <h3 className='font-bold mb-2 text-[12px]'>{subHeading}</h3>
                </div>
                <p className={`font-bold ${styles.description} text-[6px]`}>
                {description}
                </p>

            </div>
        <img src={img} alt='' className={styles.circleImg}/>
        <div className={`text-center ${styles.lowerThird} text-black`}>
            <p className='text-lg font-bold'>{lowerText}</p>
            <p className='font-light'>{lowerSubText}</p>
        </div>
        </div>
        
      </div>
      <div className={`p-2 ${styles.secondDiv} mb-10 z-0`}>
      <p className=''>{heading}</p>
      <h3 className='text-lg font-bold mb-4 text-[10px]'>{subHeading}</h3>
      <div className='w-[120px] h-[120px] rounded-full shadow p-10 relative mb-5' style={{backgroundColor:`${bg}`}}>
      <img src={img} alt='' className={`absolute top-[50%] left-[50%] w-[60px] ${styles.secondDivImg}`}/>
      </div>
      <p>
       {description}
       </p>
      </div>
      </>
  )
}

export default HomeCard