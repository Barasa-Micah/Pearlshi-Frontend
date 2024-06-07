// import React from 'react';
// import Lightbox from "yet-another-react-lightbox";
// import "yet-another-react-lightbox/styles.css";

// const GalleryMain =() => {
//     const [open, setOpen] = React.useState(false);
//     const images = [
//         {src: require('../Assets/SlideShow/20240518060004_IMG_0304.jpg').default, alt:'Gallery', className:'rounded-md object-cover h-full w-full' },
//         {src: require('../Assets/SlideShow/20240518103922_IMG_0395.jpg').default, alt:'Gallery', className:'rounded-md object-cover h-full w-full' },
//         {src: require('../Assets/SlideShow/20240518103922_IMG_0395.jpg').default, alt:'Gallery', className:'rounded-md object-cover h-full w-full' },
//         {src: require('../Assets/SlideShow/20240518103922_IMG_0395.jpg').default, alt:'Gallery', className:'rounded-md object-cover h-full w-full' },
//         {src: require('../Assets/SlideShow/20240518103922_IMG_0395.jpg').default, alt:'Gallery', className:'rounded-md object-cover h-full w-full' },
//         {src: require('../Assets/SlideShow/20240518103922_IMG_0395.jpg').default, alt:'Gallery', className:'rounded-md object-cover h-full w-full' },
//         {src: require('../Assets/SlideShow/20240518103922_IMG_0395.jpg').default, alt:'Gallery', className:'rounded-md object-cover h-full w-full' },
//         {src: require('../Assets/SlideShow/20240518103922_IMG_0395.jpg').default, alt:'Gallery', className:'rounded-md object-cover h-full w-full' },
//         {src: require('../Assets/SlideShow/20240518103922_IMG_0395.jpg').default, alt:'Gallery', className:'rounded-md object-cover h-full w-full' },
//         {src: require('../Assets/SlideShow/20240518103922_IMG_0395.jpg').default, alt:'Gallery', className:'rounded-md object-cover h-full w-full' },
//         {src: require('../Assets/SlideShow/20240518103922_IMG_0395.jpg').default, alt:'Gallery', className:'rounded-md object-cover h-full w-full' },
//         {src: require('../Assets/SlideShow/20240518103922_IMG_0395.jpg').default, alt:'Gallery', className:'rounded-md object-cover h-full w-full' },
//     ];
//     return (
//         <>
//             <div className='mx-auto flex flex-wrap w-full md:w-[70%] lg:w-[95%] justify-center items-center gap-4 mt-[120px]'>
//                 <button type="button" onClick={() => setOpen(true)}>
//                     Gallery Page
//                 </button>
//             </div>
//             <Lightbox
//                 open={open}
//                 onClose={() => setOpen(false)}
//                 slides={images.map((image, index) => ({
//                     src: image.src,
//                     alt: image.alt,
//                     key: index
//                 }))}
//             />
//         </>
//     );
// };

// export default GalleryMain;