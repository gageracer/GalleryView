import { ImageSourcePropType } from 'react-native'

export const data: iData[] = [
    {
        title: "1touch",
        data: [require("../assets/6.png")]
    },
    {
        title: "Album Name",
        data: [
            require("../assets/0.png"),
            require("../assets/1.png"),
            require("../assets/2.png")
        ]
    },
    {
        title: "Album Name",
        data: [
            require("../assets/3.png"),
            require("../assets/4.png"),
        ]
    },
    {
        title: "Album Name",
        data: [
            require("../assets/5.png")
        ]
    }
]

export interface iData{
    title: string,
    data: ImageSourcePropType[]
}