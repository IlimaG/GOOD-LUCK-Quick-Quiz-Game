import { createContext, useState } from "react";

const CustomizeGameContex = createContext()

const CustomizeGameContexProvider = ({ children }) => {

    const [numberQuestions, setNumberQuestions] = useState(10)
    const [categorie, setCategorie] = useState('')
    const [type, setType] = useState('')
    const [difficulty, setDifficulty] = useState('')


    return (
        <CustomizeGameContex.Provider value={{
            numberQuestions, setNumberQuestions,
            categorie, setCategorie,
            difficulty, setDifficulty,
            type, setType
        }}>

            {children}
        </CustomizeGameContex.Provider>
    )
}

export { CustomizeGameContex, CustomizeGameContexProvider }