import { Helmet } from "react-helmet";

const HelmentTitle = ({children}) => {
    return (
        <Helmet>
            <title>Enfinito | {children}</title>
        </Helmet>
    );
};

export default HelmentTitle;