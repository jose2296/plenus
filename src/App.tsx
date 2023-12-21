import { useEffect, useState } from 'react';

const Block = ({ color = '#FF0000', isCenter, enabled, checked, hasStar, clicked }: { color: string, isCenter: boolean, enabled: boolean, checked: boolean, hasStar: boolean, clicked: () => void }) => {

    const handleClick = () => {
        if (enabled) {
            clicked();
        }
    }

    return (
        <div className={`w-[25px] h-[25px] border-2 ${isCenter ? 'border-white' : 'border-transparent'} ${color} ${enabled ? 'hover:bg-opacity-50 cursor-pointer !border-primary' : ''} font-bold rounded-sm text-black  flex justify-center items-center`} onClick={handleClick}>
            {checked ? 'X' : ''}
            <div className='absolute'>{hasStar ? '⭐' : ''}</div>
        </div>
    )
}

interface BlockProps {
    color: string;
    enabled: boolean;
    checked: boolean;
    hasStar: boolean;
}

enum Colors {
    red = 'bg-[#FF0000]',
    orange = 'bg-[#FFA500]',
    green = 'bg-[#008000]',
    blue = 'bg-[#0000FF]',
    yellow = 'bg-[#FFFF00]'

}

const initialBlocks: BlockProps[][] = [
    [
        {
            color: Colors.green,
            enabled: false,
            checked: false,
            hasStar: false
        },
        {
            color: Colors.green,
            enabled: false,
            checked: false,
            hasStar: false
        },
        {
            color: Colors.green,
            enabled: false,
            checked: false,
            hasStar: false
        },
        {
            color: Colors.yellow,
            enabled: false,
            checked: false,
            hasStar: false
        },
        {
            color: Colors.yellow,
            enabled: false,
            checked: false,
            hasStar: false
        },
        {
            color: Colors.yellow,
            enabled: false,
            checked: false,
            hasStar: false
        },
        {
            color: Colors.yellow,
            enabled: false,
            checked: false,
            hasStar: false
        },
        {
            color: Colors.green,
            enabled: true,
            checked: false,
            hasStar: true
        },
        {
            color: Colors.blue,
            enabled: false,
            checked: false,
            hasStar: false
        },
        {
            color: Colors.blue,
            enabled: false,
            checked: false,
            hasStar: false
        },
        {
            color: Colors.blue,
            enabled: false,
            checked: false,
            hasStar: false
        },
        {
            color: Colors.orange,
            enabled: false,
            checked: false,
            hasStar: true
        },
        {
            color: Colors.yellow,
            enabled: false,
            checked: false,
            hasStar: false
        },
        {
            color: Colors.yellow,
            enabled: false,
            checked: false,
            hasStar: false
        },
        {
            color: Colors.yellow,
            enabled: false,
            checked: false,
            hasStar: false
        },
    ],
    [
        {
            color: Colors.orange,
            enabled: false,
            checked: false,
            hasStar: false
        },
        {
            color: Colors.green,
            enabled: false,
            checked: false,
            hasStar: false
        },
        {
            color: Colors.yellow,
            enabled: false,
            checked: false,
            hasStar: true
        },
        {
            color: Colors.green,
            enabled: false,
            checked: false,
            hasStar: false
        },
        {
            color: Colors.yellow,
            enabled: false,
            checked: false,
            hasStar: true
        },
        {
            color: Colors.yellow,
            enabled: false,
            checked: false,
            hasStar: false
        },
        {
            color: Colors.orange,
            enabled: false,
            checked: false,
            hasStar: false
        },
        {
            color: Colors.orange,
            enabled: true,
            checked: false,
            hasStar: false
        },
        {
            color: Colors.red,
            enabled: false,
            checked: false,
            hasStar: false
        },
        {
            color: Colors.blue,
            enabled: false,
            checked: false,
            hasStar: true
        },
        {
            color: Colors.blue,
            enabled: false,
            checked: false,
            hasStar: false
        },
        {
            color: Colors.orange,
            enabled: false,
            checked: false,
            hasStar: false
        },
        {
            color: Colors.orange,
            enabled: false,
            checked: false,
            hasStar: false
        },
        {
            color: Colors.green,
            enabled: false,
            checked: false,
            hasStar: false
        },
        {
            color: Colors.green,
            enabled: false,
            checked: false,
            hasStar: false
        },
    ],
    [
        {
            color: Colors.blue,
            enabled: false,
            checked: false,
            hasStar: true
        },
        {
            color: Colors.green,
            enabled: false,
            checked: false,
            hasStar: false
        },
        {
            color: Colors.red,
            enabled: false,
            checked: false,
            hasStar: false
        },
        {
            color: Colors.green,
            enabled: false,
            checked: false,
            hasStar: false
        },
        {
            color: Colors.green,
            enabled: false,
            checked: false,
            hasStar: false
        },
        {
            color: Colors.green,
            enabled: false,
            checked: false,
            hasStar: false
        },
        {
            color: Colors.green,
            enabled: false,
            checked: false,
            hasStar: true
        },
        {
            color: Colors.red,
            enabled: true,
            checked: false,
            hasStar: false
        },
        {
            color: Colors.red,
            enabled: false,
            checked: false,
            hasStar: false
        },
        {
            color: Colors.red,
            enabled: false,
            checked: false,
            hasStar: false
        },
        {
            color: Colors.yellow,
            enabled: false,
            checked: false,
            hasStar: false
        },
        {
            color: Colors.yellow,
            enabled: false,
            checked: false,
            hasStar: false
        },
        {
            color: Colors.orange,
            enabled: false,
            checked: false,
            hasStar: false
        },
        {
            color: Colors.green,
            enabled: false,
            checked: false,
            hasStar: false
        },
        {
            color: Colors.green,
            enabled: false,
            checked: false,
            hasStar: false
        },
    ],
    [
        {
            color: Colors.blue,
            enabled: false,
            checked: false,
            hasStar: false
        },
        {
            color: Colors.red,
            enabled: false,
            checked: false,
            hasStar: false
        },
        {
            color: Colors.red,
            enabled: false,
            checked: false,
            hasStar: false
        },
        {
            color: Colors.green,
            enabled: false,
            checked: false,
            hasStar: false
        },
        {
            color: Colors.orange,
            enabled: false,
            checked: false,
            hasStar: false
        },
        {
            color: Colors.orange,
            enabled: false,
            checked: false,
            hasStar: true
        },
        {
            color: Colors.blue,
            enabled: false,
            checked: false,
            hasStar: false
        },
        {
            color: Colors.blue,
            enabled: true,
            checked: false,
            hasStar: false
        },
        {
            color: Colors.green,
            enabled: false,
            checked: false,
            hasStar: false
        },
        {
            color: Colors.green,
            enabled: false,
            checked: false,
            hasStar: false
        },
        {
            color: Colors.yellow,
            enabled: false,
            checked: false,
            hasStar: false
        },
        {
            color: Colors.yellow,
            enabled: false,
            checked: false,
            hasStar: false
        },
        {
            color: Colors.orange,
            enabled: false,
            checked: false,
            hasStar: false
        },
        {
            color: Colors.red,
            enabled: false,
            checked: false,
            hasStar: true
        },
        {
            color: Colors.blue,
            enabled: false,
            checked: false,
            hasStar: false
        },
    ],
    [
        {
            color: Colors.red,
            enabled: false,
            checked: false,
            hasStar: false
        },
        {
            color: Colors.orange,
            enabled: false,
            checked: false,
            hasStar: false
        },
        {
            color: Colors.orange,
            enabled: false,
            checked: false,
            hasStar: false
        },
        {
            color: Colors.orange,
            enabled: false,
            checked: false,
            hasStar: false
        },
        {
            color: Colors.orange,
            enabled: false,
            checked: false,
            hasStar: false
        },
        {
            color: Colors.red,
            enabled: false,
            checked: false,
            hasStar: false
        },
        {
            color: Colors.blue,
            enabled: false,
            checked: false,
            hasStar: false
        },
        {
            color: Colors.blue,
            enabled: true,
            checked: false,
            hasStar: false
        },
        {
            color: Colors.orange,
            enabled: false,
            checked: false,
            hasStar: false
        },
        {
            color: Colors.orange,
            enabled: false,
            checked: false,
            hasStar: false
        },
        {
            color: Colors.orange,
            enabled: false,
            checked: false,
            hasStar: false
        },
        {
            color: Colors.red,
            enabled: false,
            checked: false,
            hasStar: false
        },
        {
            color: Colors.red,
            enabled: false,
            checked: false,
            hasStar: false
        },
        {
            color: Colors.red,
            enabled: false,
            checked: false,
            hasStar: false
        },
        {
            color: Colors.red,
            enabled: false,
            checked: false,
            hasStar: false
        },
    ],
    [
        {
            color: Colors.red,
            enabled: false,
            checked: false,
            hasStar: false
        },
        {
            color: Colors.blue,
            enabled: false,
            checked: false,
            hasStar: true
        },
        {
            color: Colors.blue,
            enabled: false,
            checked: false,
            hasStar: false
        },
        {
            color: Colors.red,
            enabled: false,
            checked: false,
            hasStar: true
        },
        {
            color: Colors.red,
            enabled: false,
            checked: false,
            hasStar: false
        },
        {
            color: Colors.red,
            enabled: false,
            checked: false,
            hasStar: false
        },
        {
            color: Colors.red,
            enabled: false,
            checked: false,
            hasStar: false
        },
        {
            color: Colors.yellow,
            enabled: true,
            checked: false,
            hasStar: false
        },
        {
            color: Colors.yellow,
            enabled: false,
            checked: false,
            hasStar: true
        },
        {
            color: Colors.orange,
            enabled: false,
            checked: false,
            hasStar: false
        },
        {
            color: Colors.red,
            enabled: false,
            checked: false,
            hasStar: true
        },
        {
            color: Colors.blue,
            enabled: false,
            checked: false,
            hasStar: false
        },
        {
            color: Colors.blue,
            enabled: false,
            checked: false,
            hasStar: false
        },
        {
            color: Colors.blue,
            enabled: false,
            checked: false,
            hasStar: false
        },
        {
            color: Colors.orange,
            enabled: false,
            checked: false,
            hasStar: true
        },
    ],
    [
        {
            color: Colors.yellow,
            enabled: false,
            checked: false,
            hasStar: false
        },
        {
            color: Colors.yellow,
            enabled: false,
            checked: false,
            hasStar: false
        },
        {
            color: Colors.blue,
            enabled: false,
            checked: false,
            hasStar: false
        },
        {
            color: Colors.blue,
            enabled: false,
            checked: false,
            hasStar: false
        },
        {
            color: Colors.blue,
            enabled: false,
            checked: false,
            hasStar: false
        },
        {
            color: Colors.blue,
            enabled: false,
            checked: false,
            hasStar: false
        },
        {
            color: Colors.red,
            enabled: false,
            checked: false,
            hasStar: false
        },
        {
            color: Colors.yellow,
            enabled: true,
            checked: false,
            hasStar: false
        },
        {
            color: Colors.yellow,
            enabled: false,
            checked: false,
            hasStar: false
        },
        {
            color: Colors.yellow,
            enabled: false,
            checked: false,
            hasStar: false
        },
        {
            color: Colors.green,
            enabled: false,
            checked: false,
            hasStar: false
        },
        {
            color: Colors.green,
            enabled: false,
            checked: false,
            hasStar: false
        },
        {
            color: Colors.green,
            enabled: false,
            checked: false,
            hasStar: true
        },
        {
            color: Colors.orange,
            enabled: false,
            checked: false,
            hasStar: false
        },
        {
            color: Colors.orange,
            enabled: false,
            checked: false,
            hasStar: false
        },
    ],
];

const initialColumns: { checked: boolean; checked2: boolean; value: number, value2: number }[] = [
    { checked: false, checked2: false, value: 5, value2: 3 },
    { checked: false, checked2: false, value: 5, value2: 3 },
    { checked: false, checked2: false, value: 5, value2: 3 },
    { checked: false, checked2: false, value: 5, value2: 3 },
    { checked: false, checked2: false, value: 5, value2: 3 },
    { checked: false, checked2: false, value: 5, value2: 3 },
    { checked: false, checked2: false, value: 5, value2: 3 },
    { checked: false, checked2: false, value: 5, value2: 3 },
    { checked: false, checked2: false, value: 5, value2: 3 },
    { checked: false, checked2: false, value: 5, value2: 3 },
    { checked: false, checked2: false, value: 5, value2: 3 },
    { checked: false, checked2: false, value: 5, value2: 3 },
    { checked: false, checked2: false, value: 5, value2: 3 },
    { checked: false, checked2: false, value: 5, value2: 3 },
    { checked: false, checked2: false, value: 5, value2: 3 }
]

function App() {

    const [blocksData, setBlocksData] = useState<BlockProps[][]>(initialBlocks);
    const [blocks, setBlocks] = useState<JSX.Element[]>();

    const [columns, setColumns] = useState(initialColumns);

    const [reminedCrosses, setReminedCrosses] = useState(0);
    const [colorAllowed, setColorAllowed] = useState<Colors | null>(null);

    useEffect(() => {
        setAllBlocks()
    }, [blocksData]);


    useEffect(() => {
        setAllBlocks()
    }, [reminedCrosses, colorAllowed]);

    const setAllBlocks = () => {
        const enabledBlock = !!colorAllowed && reminedCrosses > 0;
        const _blocks = blocksData.flatMap((items, i) => items.flatMap((block, j) => (
            <Block
                key={`block-${i}-${j}`}
                color={block.color}
                hasStar={block.hasStar}
                enabled={enabledBlock && block.color === colorAllowed && block.enabled}
                checked={block.checked}
                isCenter={j === 7}
                clicked={() => handledBlockClicked(i, j)}
            />
        )));

        setBlocks(_blocks);
    }

    const handledBlockClicked = (i: number, j: number) => {
        blocksData[i][j].checked = true;
        blocksData[i][j].enabled = false;

        try {
            blocksData[i - 1][j].enabled = blocksData[i - 1][j].checked ? false : true;
        } catch (error) {
        }
        try {
            blocksData[i][j + 1].enabled = blocksData[i][j + 1].checked ? false : true;
        } catch (error) {
        }
        try {
            blocksData[i][j - 1].enabled = blocksData[i][j - 1].checked ? false : true;
        } catch (error) {
        }
        try {
            blocksData[i + 1][j].enabled = blocksData[i + 1][j].checked ? false : true;
        } catch (error) {
        }

        setReminedCrosses(reminedCrosses - 1);
        setAllBlocks();
        checkColumnFilled(j)
    }

    const checkColumnFilled = (j: number) => {
        const allColumnBlocksChecked = blocksData.flatMap(blockRow => blockRow[j]).every(block => block.checked)

        columns[j].checked = columns[j].checked ? false : allColumnBlocksChecked;
        columns[j].checked2 = columns[j].checked2 ? false : allColumnBlocksChecked;

        setColumns(columns)
    }

    const throwDices = () => {
        const colors = Object.values(Colors);
        const colorIndex = Math.floor(Math.random() * colors.length);
        const numbers = [1,2,3,4,5];
        const numberIndex = Math.floor(Math.random() * numbers.length);

        setReminedCrosses(numbers[numberIndex]);
        setColorAllowed(colors[colorIndex]);
    }

    return (
        <div className='main-container h-screen bg-base-300 flex flex-col'>
            <div className="grid grid-cols-15 grid-rows-7 gap-1">
                {blocks}
            </div>

            <div className='grid grid-cols-15 gap-1'>
                {columns && columns.map(({ value, checked }, index) => (
                    <div key={index} className='w-[25px] h-[25px] flex items-center justify-center'>
                        {value}
                        <div className='absolute'>{checked ? 'X' : ''}</div>
                    </div>
                ))}
            </div>
            <div className='grid grid-cols-15 gap-1'>
                {columns && columns.map(({ value2, checked2 }, index) => (
                    <div key={index} className='w-[25px] h-[25px] flex items-center justify-center'>
                        {value2}
                        <div className='absolute'>{checked2 ? 'X' : ''}</div>
                    </div>
                ))}
            </div>

            <div>
                <div className="btn btn-primary" onClick={throwDices}>Throw Dices</div>
                {colorAllowed} - {reminedCrosses}
            </div>
        </div>
    );
}

export default App;
