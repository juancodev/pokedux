import { StarOutlined } from '@ant-design/icons';
import { Card } from 'antd';
import Meta from 'antd/lib/card/Meta';

const PokemonCard = ({ name, image, types }) => {
  const typesString = types.map((element) => element.type?.name);

  return (
    <Card
      title={name}
      cover={<img src={image} alt={name} />}
      extra={<StarOutlined />}
    >
      <Meta description={typesString} />
    </Card>
  )
}

export default PokemonCard;