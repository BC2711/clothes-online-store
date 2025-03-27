import { Card, Typography, Button, CardHeader } from "@material-tailwind/react";
import DialogWithImage from "./DialogWithImage";

interface EcommerceCardProps {
    image: string;
}

export default function EcommerceCard({ image }: EcommerceCardProps) {
    return (
        <Card className="w-[90%] max-w-[400px] mx-auto">
            <CardHeader
                // as="img"
                // src={image}
                // alt="card-image"
                className="object-cover object-center h-auto max-w-full rounded-lg"
            > <DialogWithImage img={image} /> </CardHeader>
           
            <Card.Body>
                <div className="mb-2 flex items-center justify-between">
                    <Typography variant="h6">Apple AirPods</Typography>
                    <Typography variant="h6">$95.00</Typography>
                </div>
                <Typography className="text-foreground">
                    With plenty of talk and listen time.
                </Typography>
            </Card.Body>
            <Card.Footer>
                <Button isFullWidth color="secondary">
                    Add to Cart
                </Button>
            </Card.Footer>
        </Card>
    );
}
