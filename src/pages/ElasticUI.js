import ElasticCard from "../components/ElasticUI/Card/ElasticCard";
import { AiFillStar } from "react-icons/ai";
const ElasticUI = () => {
  return (
    <div>
      <h1>ElasticUI</h1>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          maxWidth: "640px",
          gap: "10px",
          alignItems: "center",
        }}
      >
        <ElasticCard
          title="Card Title"
          background="url(https://upload.wikimedia.org/wikipedia/commons/1/15/Mt._Everest_from_Gokyo_Ri_November_5%2C_2012.jpg), #F5F7FA"
          icon={<AiFillStar size={32} />}
          footer={
            <div>
              <button>Button</button>
              <p>Paragraph</p>
            </div>
          }
        >
          Example of a card’s description. Stick to one or two sentences.
          kjsndksllkakndkandnk Example of a card’s description. Stick to one or
          two sentences. kjsndksllkakndkandnk Example of a card’s description.
          Stick to one or two sentences. kjsndksllkakndkandnk Example of a
          card’s description. Stick to one or two sentences.
          kjsndksllkakndkandnk Example of a card’s description. Stick to one or
          two sentences. kjsndksllkakndkandnk
        </ElasticCard>
        <ElasticCard
          title="Card Title2"
          //   background="url(https://upload.wikimedia.org/wikipedia/commons/1/15/Mt._Everest_from_Gokyo_Ri_November_5%2C_2012.jpg_), #F0F"
          icon={<AiFillStar size={32} />}
        >
          Example of a card’s description.2
        </ElasticCard>
        <ElasticCard
          icon={<AiFillStar size={32} />}
          title="Card Title"
          footer={
            <div>
              <button>Button</button>
            </div>
          }
        >
          Example of a card’s description.3
        </ElasticCard>
      </div>
    </div>
  );
};

export default ElasticUI;
