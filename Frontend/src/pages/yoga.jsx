import Lottie from "lottie-react";
import yoga from '../assets/yoga.json';
import yoga1 from '../assets/yoga1.json';
import yoga2 from '../assets/yoga2.json';

const Yoga = () => {
  return (
  <>
  <div className='flex items-center font-bold justify-center md:text-4xl pt-36'>
       <h2>Yoga is a breath of fresh air even amidst hatred and corruption in our society.</h2>
        </div>
  <div className="yoga common">
                <Lottie animationData={yoga} style={{height:400}} />
                <div className="details px-20 py-5">
                    <div className="pl-6"><h2 className="text-3xl font-bold">Sukhasana </h2></div>
                    <h3 className='font-serif text-center'>This sitting posture is recommended for those who have difficulty sitting for a long period of time in Siddhasana, Vajrasana or Padmasana.</h3><br/>
                    <p className=' text-black text-center '>Sit with the legs straight. Bend both legs and place the right foot under the left thigh and the left foot under, or in front of, the right calf on the floor. If it is more comfortable cross the legs in the opposite way. If it is difficult to keep the body upright then sit on a cushion at an appropriate height to make the posture comfortable.<br/><br/>

                    If it is not possible to sit comfortably and painlessly in Sukhasana, practice the breathing and meditation exercises sitting on a chair. The most important point for everyone is that the upper body is straight, the body is relaxed and can remain motionless during the whole exercise.</p>
                </div>
           </div>
           <div className="yoga1 common">
                <Lottie animationData={yoga1} style={{height:350}} />
                <div className="details px-20">
                    <div className="bar pl-6"><h1>Padmasana </h1></div>
                    <h3 className="text-center ">Padmasana, together with Shirshasana (Headstand), is referred to as the supreme or “royal” Asana. The Lotus posture activates and balances the Chakras and quietens the thoughts. It is an ideal sitting posture for Pranayama and Meditation.</h3><br/>
                    <p className="text-center">Sit with legs straight on the floor. Bend the right leg and place the foot very close to the body on top of the left thigh. Now bend the left leg and bring the foot very close to the body on top of the right thigh. The upper body should be completely straight and knees should touch the floor. To keep the trunk upright more easily and help the knees to rest on the floor, sit on a cushion of an appropriate height.  
                    This position can also be practiced by bending the left leg first and then the right leg.           
                    </p>
                </div>
           </div>
           <div className="yoga2 common pb-32 px-20">
                <Lottie animationData={yoga2} style={{height:350}} />
                <div className="details">
                    <div className="pl-6  "><h1>Vrksasana </h1></div>
                    <h3 className="text-center">The key to getting the most out of this is really paying attention to every part of your body.</h3><br/>
                    <p  className="text-center">Start at the ground and feel where weight is concentrated on your standing foot. Now move up your standing leg and feel the muscles engaged with a micro-bend in your knee. Notice where your hips and pelvis are? Are they level and tucked under slightly or is one side sticking out?<br/><br/>But when you get it right and can balance, you’ll see how your body should be aligned to stay strong. If reaching your toe is too challenging, you can still get the benefits of this pose by keeping your leg bent and holding on to your knee.</p>
                </div>
           </div>
  </>
  )
}

export default Yoga
