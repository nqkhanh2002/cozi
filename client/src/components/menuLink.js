import { Link } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

export default function MenuLink({ to, text }) {
    return (
        <Link as={NavLink} to={to} sx={styles.link} style={({ isActive }) => ({ 
            color: isActive ? '#2B6CB0' : '#1A202C',
            fontWeight: isActive ? 'bold' : 'normal',
        })} >
            {text}
        </Link>
    )
}

const styles = {
    link: {
        _hover: {
            borderLeft: '2px solid',
            paddingLeft: 2,
            textDecoration: 'none'
        },
        _focus: {
            outline: 'none',
        }
    }
}