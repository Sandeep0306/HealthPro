import Card from "../components/card"
const predictDieases = () => {
  return (
    <div className="px-28 flex flex-wrap justify-center py-28 bg-slate-100">
        <div className="flex flex-wrap">
        <Card name="Skin Diseases" type="skin" img="https://media.istockphoto.com/id/1456638962/photo/hyperpigmentation.jpg?s=2048x2048&w=is&k=20&c=jPgaWYkCuXN00KyTBWeIAM9wUSIZKbyiMCVr12KQbCs="/>
        <Card name="Heptities"img="https://media.istockphoto.com/id/970802614/photo/the-photo-of-large-intestine-is-on-the-mans-body-against-gray-background-people-with-stomach.jpg?s=2048x2048&w=is&k=20&c=DfM2g40f6tezb1qD6yoPa6FYylRqjBCfsfabaCH5Fxk=" type="Heptities"/>
        <Card name="Stomach" type="stomach" img="https://images.unsplash.com/photo-1541199249251-f713e6145474?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHN0b21hY2glMjBwYWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"/>
        <Card name="Breast Cancer" img="https://images.unsplash.com/photo-1598885159329-9377168ac375?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8QnJlYXN0JTIwQ2FuY2VyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" type="breastCancer"/>
        <Card type="insurance" name="Insurance" img="https://plus.unsplash.com/premium_photo-1661329820722-3a38e945083b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW5zdXJhbmNlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"/>
        </div>

    </div>
  )
}

export default predictDieases