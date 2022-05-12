import {
    Flex,
    Heading,
    Text,
} from "@chakra-ui/react";

export default function About() {
    return (
        <Flex sx={styles.about}>
            <Heading as='h1' size='lg' mb='4'>Team: WDA 01</Heading>
            <Text>Gồm 4 chàng trai tham vọng và tràn đầy nhiệt huyết!</Text>
            <Text>Danh sách thành viên:</Text>
            <Text as='li'>Vũ Thành Đạt</Text>
            <Text as='li'>Lê Nguyễn Quang Duy</Text>
            <Text as='li'>Nguyễn Quốc Khánh</Text>
            <Text as='li'>Đinh Phương Nam</Text>
        </Flex>
    )
}

const styles = {
    about: {
        w: 'full',
        p: 4,
        flexDirection: 'column',
        lineHeight: 'taller',
    }
}