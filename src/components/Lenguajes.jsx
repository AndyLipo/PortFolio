import React from 'react'
import { Icon } from '@iconify/react';

function Lenguajes() {
  return (
    <>
        <div>
            <h3 className='font-light text-7xl text-center mt-32'>Herramientas</h3>
        </div>
        <div className='grid grid-cols-6 gap-3 mt-10'>
            <div className='rounded-full bg-tiffany_blue size-24 flex items-center justify-center'>
                <Icon icon="vscode-icons:file-type-html" width="64" height="64" />            
            </div>
            <div className='rounded-full bg-tiffany_blue size-24 flex items-center justify-center'>
                <Icon icon="devicon:css3"  width="64" height="64"/>
            </div>
            <div className='rounded-full bg-tiffany_blue size-24 flex items-center justify-center'>
                <Icon icon="logos:javascript"  width="64" height="64"/>
            </div>
            <div className='rounded-full bg-tiffany_blue size-24 flex items-center justify-center'>
                <Icon icon="devicon:typescript"  width="64" height="64"/>
            </div>
            <div className='rounded-full bg-tiffany_blue size-24 flex items-center justify-center'>
                <Icon icon="vscode-icons:file-type-vite"  width="64" height="64"/>
            </div>
            <div className='rounded-full bg-tiffany_blue size-24 flex items-center justify-center'>
            <Icon icon="devicon:tailwindcss"  width="64" height="64"/>
            </div>
            <div className='rounded-full bg-tiffany_blue size-24 flex items-center justify-center'>
                <Icon icon="logos:bootstrap"  width="64" height="64"/>
            </div>
            <div className='rounded-full bg-tiffany_blue size-24 flex items-center justify-center'>
                <Icon icon="vscode-icons:file-type-angular"  width="64" height="64"/>
            </div>
            <div className='rounded-full bg-tiffany_blue size-24 flex items-center justify-center'>
                <Icon icon="logos:vue"  width="64" height="64"/>   
            </div>
            <div className='rounded-full bg-tiffany_blue size-24 flex items-center justify-center'>
                <Icon icon="devicon:git"  width="64" height="64"/>
            </div>
            <div className='rounded-full bg-tiffany_blue size-24 flex items-center justify-center'>
                <Icon icon="simple-icons:github"  width="64" height="64"/>
            </div>
            <div className='rounded-full bg-tiffany_blue size-24 flex items-center justify-center'>
                <Icon icon="devicon:figma" width="64" height="64" />
            </div>
        </div>
    </>
  )
}

export default Lenguajes