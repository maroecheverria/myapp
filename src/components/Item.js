
const Item = ({item}) =>

    <tr>
        <th scope="row">{item.id}</th>
        <td>{item.title}</td>
        <td>{item.price}</td>
        <td><img src={item.pictureUrl} className="Cart-logo" /></td>
    </tr>

export default Item;