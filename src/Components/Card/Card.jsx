import React, { useState } from "react";
import './Card.css';
import Pokeinfo from '../Pokeinfo/Pokeinfo';
import { Dialog, DialogContent, Button } from '@mui/material';

const Card = ({ data }) => {
    const [open, setOpen] = useState(false);
    const handleClose = () => setOpen(false);

    const types = data.type && data.type.length > 0 ? data.type.join(', ') : 'No types';
    return (
        <div className="card-container" key={data.id}>
            <h4>{data.id} {data.name}</h4>
            <h4>Types: {types}</h4>
            <img
                alt={`data ${data.name}`}
                src={`https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${data.id}.svg`}
                style={{ width: '200px', height: '180px' }}
            />
            <Button

                onClick={() => setOpen(true)}
                style={{ border: '1px solid black', borderRadius: '4px', padding: '2px' }}
            >
                Ability
            </Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogContent>
                    <Pokeinfo data={data.name} />
                </DialogContent>
            </Dialog>
        </div>
    )
}

export default Card;
