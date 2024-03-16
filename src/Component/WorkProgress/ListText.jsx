
const ListText = ({title, subTitle}) => {
    return (
        <li>
            {title}:
            <span className="text-lg text-gray-700 font-semibold"> {subTitle}</span>
        </li>
    );
};

export default ListText;