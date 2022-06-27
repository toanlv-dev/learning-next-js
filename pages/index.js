import styles from '../styles/Home.module.css'
import Image from 'next/image'
import image_01 from '../assets/IMAGE_01.jpg'
import {useEffect, useState} from "react";
import Button from "./Button";

const Home = () => {
    let [counter, setCounter] = useState(0)
    const [visible, setVisible] = useState(true)

    const handleCounter = () => {
      setCounter (prevState => {
          return prevState + 1
      })
    }

    useEffect(() => {
        console.log('Lang nghe thay doi vua visible')
    }, [visible])

    return (
        <div className={styles.container}>
            <h1>Homepage</h1>
            <button onClick={handleCounter}>Increment</button>
            <p>{counter}</p>

            <button onClick={() => {
                setVisible(false)
            }}>Hide Button</button>
            {
                visible && <Button />
            }
        </div>
    )
}

export default Home
