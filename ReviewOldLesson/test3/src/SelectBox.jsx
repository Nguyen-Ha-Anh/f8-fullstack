import { useState } from 'react';

export default function SelectBox() {
    const [clicked, setClicked] = useState(false)

    return (
        <div
            onClick={() => setClicked(!clicked)}
            style={{
                width: 100,
                height: 100,
                backgroundColor: clicked ? 'green' : 'gray',
                cursor: 'pointer'
            }}
        >
            {clicked ? 'da chon' : 'chua chon'}
        </div>
    )
}