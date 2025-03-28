import {
    Dialog,
    Button,
    Avatar,
    Typography,
    IconButton,
    Tooltip,
    Spinner
} from "@material-tailwind/react";
import { Heart, ShareIos, Download, Xmark } from "iconoir-react";
import { useState } from "react";

export default function DialogWithImage({ img }: { img: string }) {
    const [open, setOpen] = useState(false);
    const [isLiked, setIsLiked] = useState(false);
    const [isDownloading, setIsDownloading] = useState(false);
    const [views, setViews] = useState(44082044);
    const [downloads, setDownloads] = useState(553031);

    const handleOpen = () => {
        setOpen(!open);
        // Increment views when dialog opens
        if (!open) {
            setViews(prev => prev + 1);
        }
    };

    const handleDownload = () => {
        setIsDownloading(true);
        // Simulate download
        setTimeout(() => {
            setDownloads(prev => prev + 1);
            setIsDownloading(false);
            // In a real app, you would trigger the actual download here
        }, 1500);
    };

    const handleLike = () => {
        setIsLiked(!isLiked);
    };

    const handleShare = () => {
        // In a real app, implement share functionality
        if (navigator.share) {
            navigator.share({
                title: 'Check out this image',
                text: 'Amazing image from our collection',
                url: img,
            }).catch(console.error);
        } else {
            // Fallback for browsers that don't support Web Share API
            alert('Share functionality not available in your browser');
        }
    };

    return (
        <>
            <img
                alt="Product"
                src={img}
                className="h-64 w-full cursor-zoom-in rounded-lg object-cover object-center transition-transform hover:scale-105"
                onClick={handleOpen}
            />

            <Dialog 
                size="xl" 
                open={open} 
                handler={handleOpen}
                className="bg-white/90 backdrop-blur-sm"
            >
                <div className="relative p-6">
                    <IconButton
                        variant="gradient"
                        size="sm"
                        onClick={handleOpen}
                        className="absolute right-4 top-4 !rounded-full bg-gray-900/10 hover:bg-gray-900/20"
                    >
                        <Xmark className="h-5 w-5 text-gray-900" />
                    </IconButton>

                    <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center gap-3">
                            <Avatar
                                size="md"
                                alt="Andrew Alexa"
                                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
                                className="border-2 border-white shadow-lg"
                            />
                            <div>
                                <Typography variant="h6" className="font-semibold">
                                    Andrew Alexa
                                </Typography>
                                <Typography variant="small" className="text-gray-600">
                                    @alexandrew
                                </Typography>
                            </div>
                        </div>
                        <div className="flex items-center gap-2">
                            <Tooltip content={isLiked ? "Unlike" : "Like"}>
                                <IconButton 
                                    size="sm" 
                                    variant="gradient" 
                                    color={isLiked ? "warning" : "secondary"}
                                    onClick={handleLike}
                                >
                                    <Heart 
                                        className={`h-5 w-5 ${isLiked ? "fill-current" : ""}`} 
                                    />
                                </IconButton>
                            </Tooltip>
                            <Button 
                                size="sm" 
                                variant="gradient" 
                                color="primary"
                                onClick={handleDownload}
                                disabled={isDownloading}
                                className="flex items-center gap-1.5"
                            >
                                {isDownloading ? (
                                    <>
                                        <Spinner className="h-4 w-4" />
                                        Downloading...
                                    </>
                                ) : (
                                    <>
                                        <Download className="h-4 w-4" />
                                        Free Download
                                    </>
                                )}
                            </Button>
                        </div>
                    </div>

                    <div className="mb-6 overflow-hidden rounded-xl border border-gray-200 shadow-lg">
                        <img
                            alt="Enlarged view"
                            src={img}
                            className="h-[40rem] w-full object-contain"
                        />
                    </div>

                    <div className="flex flex-wrap items-center justify-between gap-4">
                        <div className="flex items-center gap-8">
                            <div>
                                <Typography variant="small" className="text-gray-600">
                                    Views
                                </Typography>
                                <Typography variant="h5" className="font-semibold">
                                    {new Intl.NumberFormat().format(views)}
                                </Typography>
                            </div>
                            <div>
                                <Typography variant="small" className="text-gray-600">
                                    Downloads
                                </Typography>
                                <Typography variant="h5" className="font-semibold">
                                    {new Intl.NumberFormat().format(downloads)}
                                </Typography>
                            </div>
                        </div>
                        <Button 
                            size="sm" 
                            variant="gradient" 
                            className="flex items-center gap-1.5 text-gray-900"
                            onClick={handleShare}
                        >
                            <ShareIos className="h-4 w-4" />
                            Share
                        </Button>
                    </div>
                </div>
            </Dialog>
        </>
    );
}