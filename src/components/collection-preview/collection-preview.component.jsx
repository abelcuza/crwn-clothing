import React from 'react';
// Custom Components
import CollectionItem from '../collection-item/collection-item.component'
// Styles
import './collection-preview.styles.scss'

const CollectionPreview = ({ title, items }) => (
    <div className='collection-preview'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <div className='preview'>
            {items.filter((items, indx) => indx < 4).map(item => (
                <CollectionItem key={item.id} item={item}/>
            ))}
        </div>
    </div>
);

export default CollectionPreview;
