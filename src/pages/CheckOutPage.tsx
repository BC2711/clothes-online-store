import { useState } from 'react';
import {
    Card,
    CardBody,
    CardHeader,
    Typography,
    Button,
    Input,
    Checkbox,
    Select,

    Radio,
} from '@material-tailwind/react';
import { LockClosedIcon, CreditCardIcon, BanknotesIcon } from '@heroicons/react/24/solid';

type CheckoutFormData = {
    email: string;
    firstName: string;
    lastName: string;
    address: string;
    apartment?: string;
    city: string;
    country: string;
    state: string;
    postalCode: string;
    phone: string;
    saveInfo: boolean;
    paymentMethod: 'credit-card' | 'paypal' | 'bank-transfer';
    cardNumber: string;
    cardName: string;
    cardExpiry: string;
    cardCvc: string;
};

type CartItem = {
    id: string;
    name: string;
    price: number;
    quantity: number;
    image: string;
};

const CheckoutPage = () => {
    const [formData, setFormData] = useState<CheckoutFormData>({
        email: '',
        firstName: '',
        lastName: '',
        address: '',
        apartment: '',
        city: '',
        country: 'United States',
        state: '',
        postalCode: '',
        phone: '',
        saveInfo: false,
        paymentMethod: 'credit-card',
        cardNumber: '',
        cardName: '',
        cardExpiry: '',
        cardCvc: '',
    });

    const [activeStep, setActiveStep] = useState(0);

    // Sample cart data
    const cartItems: CartItem[] = [
        {
            id: '1',
            name: 'Premium Comfort T-Shirt',
            price: 29.99,
            quantity: 2,
            image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab',
        },
        {
            id: '2',
            name: 'Classic Denim Jeans',
            price: 59.99,
            quantity: 1,
            image: 'https://images.unsplash.com/photo-1542272604-787c3835535d',
        },
    ];

    const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const shippingCost = 5.99;
    const tax = subtotal * 0.08; // 8% tax
    const total = subtotal + shippingCost + tax;

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value,
        });
    };

    const handleSelectChange = (name: keyof CheckoutFormData, value: string) => {
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Process checkout logic here
        console.log('Checkout submitted:', formData);
        setActiveStep(1); // Move to confirmation step
    };

    const countries = ['United States', 'Canada', 'United Kingdom', 'Australia'];
    const states = ['California', 'New York', 'Texas', 'Florida'];

    if (activeStep === 1) {
        return (
            <div className="max-w-4xl mx-auto p-6">
                <Card className="mt-8">
                    <CardHeader color="blue" className="p-6">
                        <Typography variant="h4" color="primary">
                            Order Confirmation
                        </Typography>
                    </CardHeader>
                    <CardBody className="p-6">
                        <div className="text-center mb-8">
                            <svg
                                className="w-16 h-16 text-green-500 mx-auto mb-4"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M5 13l4 4L19 7"
                                />
                            </svg>
                            <Typography variant="h3" className="mb-2">
                                Thank you for your order!
                            </Typography>
                            <Typography variant="paragraph" className="text-gray-600">
                                Your order #12345 has been placed and will be processed shortly.
                            </Typography>
                        </div>

                        <div className="border rounded-lg p-6 mb-6">
                            <Typography variant="h5" className="mb-4">
                                Order Summary
                            </Typography>
                            {cartItems.map((item) => (
                                <div key={item.id} className="flex justify-between items-center py-3 border-b">
                                    <div className="flex items-center">
                                        <img
                                            src={item.image}
                                            alt={item.name}
                                            className="w-16 h-16 object-cover rounded mr-4"
                                        />
                                        <div>
                                            <Typography variant="paragraph">{item.name}</Typography>
                                            <Typography variant="small" color="primary">
                                                Qty: {item.quantity}
                                            </Typography>
                                        </div>
                                    </div>
                                    <Typography variant="paragraph">${(item.price * item.quantity).toFixed(2)}</Typography>
                                </div>
                            ))}

                            <div className="mt-4 space-y-2">
                                <div className="flex justify-between">
                                    <Typography variant="paragraph" color="primary">
                                        Subtotal
                                    </Typography>
                                    <Typography variant="paragraph">${subtotal.toFixed(2)}</Typography>
                                </div>
                                <div className="flex justify-between">
                                    <Typography variant="paragraph" color="primary">
                                        Shipping
                                    </Typography>
                                    <Typography variant="paragraph">${shippingCost.toFixed(2)}</Typography>
                                </div>
                                <div className="flex justify-between">
                                    <Typography variant="paragraph" color="primary">
                                        Tax
                                    </Typography>
                                    <Typography variant="paragraph">${tax.toFixed(2)}</Typography>
                                </div>
                                <div className="flex justify-between font-bold mt-2 pt-2 border-t">
                                    <Typography variant="paragraph">Total</Typography>
                                    <Typography variant="paragraph">${total.toFixed(2)}</Typography>
                                </div>
                            </div>
                        </div>

                        <div className="border rounded-lg p-6">
                            <Typography variant="h5" className="mb-4">
                                Shipping Information
                            </Typography>
                            <Typography variant="paragraph">
                                {formData.firstName} {formData.lastName}
                            </Typography>
                            <Typography variant="paragraph">{formData.address}</Typography>
                            {formData.apartment && (
                                <Typography variant="paragraph">{formData.apartment}</Typography>
                            )}
                            <Typography variant="paragraph">
                                {formData.city}, {formData.state} {formData.postalCode}
                            </Typography>
                            <Typography variant="paragraph">{formData.country}</Typography>
                            <Typography variant="paragraph" className="mt-2">
                                Phone: {formData.phone}
                            </Typography>
                        </div>

                        <Button
                            // fullWidth
                            className="mt-6"
                            color="primary"
                            onClick={() => setActiveStep(0)}
                        >
                            Back to Shopping
                        </Button>
                    </CardBody>
                </Card>
            </div>
        );
    }

    return (
        <div className="max-w-6xl mx-auto p-4 md:p-6">
            <Typography variant="h2" className="mb-6">
                Checkout
            </Typography>

            <div className="flex flex-col lg:flex-row gap-8">
                {/* Left column - Checkout form */}
                <div className="lg:w-2/3">
                    <Card className="mb-6">
                        <CardHeader color="blue" className="p-6">
                            <Typography variant="h4" color="primary">
                                Contact Information
                            </Typography>
                        </CardHeader>
                        <CardBody className="p-6">
                            <Input
                                type="email"
                                label="Email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                required
                                className="mb-4"
                            />
                            <Checkbox
                                label="Email me with news and offers"
                                name="saveInfo"
                                checked={formData.saveInfo}
                                onChange={handleInputChange}
                            />
                        </CardBody>
                    </Card>

                    <Card className="mb-6">
                        <CardHeader color="blue" className="p-6">
                            <Typography variant="h4" color="primary">
                                Shipping Address
                            </Typography>
                        </CardHeader>
                        <CardBody className="p-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                                <Input
                                    label="First name"
                                    name="firstName"
                                    value={formData.firstName}
                                    onChange={handleInputChange}
                                    required
                                />
                                <Input
                                    label="Last name"
                                    name="lastName"
                                    value={formData.lastName}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>

                            <Input
                                label="Address"
                                name="address"
                                value={formData.address}
                                onChange={handleInputChange}
                                required
                                className="mb-4"
                            />
                            <Input
                                label="Apartment, suite, etc. (optional)"
                                name="apartment"
                                value={formData.apartment || ''}
                                onChange={handleInputChange}
                                className="mb-4"
                            />

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                                <Select
                                    label="Country"
                                    value={formData.country}
                                    onChange={(value) => handleSelectChange('country', value as string)}
                                >
                                    {countries.map((country) => (
                                        <Option key={country} value={country}>
                                            {country}
                                        </Option>
                                    ))}
                                </Select>

                                <Select
                                    label="State"
                                    value={formData.state}
                                    onChange={(value) => handleSelectChange('state', value as string)}
                                >
                                    {states.map((state) => (
                                        <Option key={state} value={state}>
                                            {state}
                                        </Option>
                                    ))}
                                </Select>

                                <Input
                                    label="Postal code"
                                    name="postalCode"
                                    value={formData.postalCode}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>

                            <Input
                                label="Phone"
                                name="phone"
                                value={formData.phone}
                                onChange={handleInputChange}
                                required
                            />

                            <Checkbox
                                label="Save this information for next time"
                                name="saveInfo"
                                checked={formData.saveInfo}
                                onChange={handleInputChange}
                                className="mt-4"
                            />
                        </CardBody>
                    </Card>

                    <Card className="mb-6">
                        <CardHeader color="blue" className="p-6">
                            <Typography variant="h4" color="primary">
                                Payment Method
                            </Typography>
                        </CardHeader>
                        <CardBody className="p-6">
                            <div className="space-y-4 mb-6">
                                <Radio
                                    name="paymentMethod"
                                    label={
                                        <div className="flex items-center">
                                            <CreditCardIcon className="w-5 h-5 mr-2" />
                                            Credit Card
                                        </div>
                                    }
                                    value="credit-card"
                                    checked={formData.paymentMethod === 'credit-card'}
                                    onChange={() => handleSelectChange('paymentMethod', 'credit-card')}
                                />

                                {formData.paymentMethod === 'credit-card' && (
                                    <div className="ml-8 mt-4 space-y-4">
                                        <Input
                                            label="Card number"
                                            name="cardNumber"
                                            value={formData.cardNumber}
                                            onChange={handleInputChange}
                                            required
                                        icon={<CreditCardIcon className="h-5 w-5" />}
                                        />
                                        <Input
                                            label="Name on card"
                                            name="cardName"
                                            value={formData.cardName}
                                            onChange={handleInputChange}
                                            required
                                        />
                                        <div className="grid grid-cols-2 gap-4">
                                            <Input
                                                label="Expiration date (MM/YY)"
                                                name="cardExpiry"
                                                value={formData.cardExpiry}
                                                onChange={handleInputChange}
                                                required
                                            />
                                            <Input
                                                label="CVC"
                                                name="cardCvc"
                                                value={formData.cardCvc}
                                                onChange={handleInputChange}
                                                required
                                            />
                                        </div>
                                    </div>
                                )}

                               
                                <Radio
                                    name="paymentMethod"
                                    label={
                                        <div className="flex items-center">
                                            <svg
                                                className="w-5 h-5 mr-2"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24"
                                                fill="currentColor"
                                            >
                                                <path d="M12.5 10.5c0 .828-.672 1.5-1.5 1.5s-1.5-.672-1.5-1.5.672-1.5 1.5-1.5 1.5.672 1.5 1.5zm-1.5 4.5c.828 0 1.5.672 1.5 1.5s-.672 1.5-1.5 1.5-1.5-.672-1.5-1.5.672-1.5 1.5-1.5zm6-6c.828 0 1.5.672 1.5 1.5s-.672 1.5-1.5 1.5-1.5-.672-1.5-1.5.672-1.5 1.5-1.5zm-12 0c.828 0 1.5.672 1.5 1.5s-.672 1.5-1.5 1.5-1.5-.672-1.5-1.5.672-1.5 1.5-1.5zm6-6c.828 0 1.5.672 1.5 1.5s-.672 1.5-1.5 1.5-1.5-.672-1.5-1.5.672-1.5 1.5-1.5zm6 6c.828 0 1.5.672 1.5 1.5s-.672 1.5-1.5 1.5-1.5-.672-1.5-1.5.672-1.5 1.5-1.5z" />
                                            </svg>
                                            PayPal
                                        </div>
                                    }
                                    value="paypal"
                                    checked={formData.paymentMethod === 'paypal'}
                                    onChange={() => handleSelectChange('paymentMethod', 'paypal')}
                                />
                                <label htmlFor=""><div className="flex items-center">
                                    <BanknotesIcon className="w-5 h-5 mr-2" />
                                    Bank Transfer
                                </div></label>
                                <Radio
                                    name="paymentMethod"
                                    label={
                                        <div className="flex items-center">
                                            <BanknotesIcon className="w-5 h-5 mr-2" />
                                            Bank Transfer
                                        </div>
                                    }
                                    value="bank-transfer"
                                    checked={formData.paymentMethod === 'bank-transfer'}
                                    onChange={() => handleSelectChange('paymentMethod', 'bank-transfer')}
                                />
                            </div>

                            <div className="flex items-center text-sm text-gray-600">
                                <LockClosedIcon className="h-5 w-5 mr-2" />
                                <span>Your transaction is secured with SSL encryption</span>
                            </div>
                        </CardBody>
                    </Card>
                </div>

                {/* Right column - Order summary */}
                <div className="lg:w-1/3">
                    <Card className="sticky top-6">
                        <CardHeader color="blue" className="p-6">
                            <Typography variant="h4" color="primary">
                                Order Summary
                            </Typography>
                        </CardHeader>
                        <CardBody className="p-6">
                            <div className="space-y-4">
                                {cartItems.map((item) => (
                                    <div key={item.id} className="flex justify-between items-center">
                                        <div className="flex items-center">
                                            <div className="bg-gray-100 rounded-md w-12 h-12 flex items-center justify-center mr-3">
                                                <img
                                                    src={item.image}
                                                    alt={item.name}
                                                    className="w-10 h-10 object-cover"
                                                />
                                            </div>
                                            <div>
                                                <Typography variant="small" className="font-medium">
                                                    {item.name}
                                                </Typography>
                                                <Typography variant="small" color="primary">
                                                    Qty: {item.quantity}
                                                </Typography>
                                            </div>
                                        </div>
                                        <Typography variant="small" className="font-medium">
                                            ${(item.price * item.quantity).toFixed(2)}
                                        </Typography>
                                    </div>
                                ))}

                                <div className="border-t pt-4 space-y-2">
                                    <div className="flex justify-between">
                                        <Typography variant="small" color="primary">
                                            Subtotal
                                        </Typography>
                                        <Typography variant="small">${subtotal.toFixed(2)}</Typography>
                                    </div>
                                    <div className="flex justify-between">
                                        <Typography variant="small" color="primary">
                                            Shipping
                                        </Typography>
                                        <Typography variant="small">${shippingCost.toFixed(2)}</Typography>
                                    </div>
                                    <div className="flex justify-between">
                                        <Typography variant="small" color="primary">
                                            Tax
                                        </Typography>
                                        <Typography variant="small">${tax.toFixed(2)}</Typography>
                                    </div>
                                    <div className="flex justify-between font-bold pt-2 border-t">
                                        <Typography variant="paragraph">Total</Typography>
                                        <Typography variant="paragraph">${total.toFixed(2)}</Typography>
                                    </div>
                                </div>

                                <Button
                                    // fullWidth
                                    color="primary"
                                    className="mt-4"
                                    onClick={handleSubmit}
                                >
                                    Complete Order
                                </Button>

                                <Typography variant="small" className="text-center text-gray-600 mt-4">
                                    By placing your order, you agree to our{' '}
                                    <a href="#" className="text-blue-500 hover:underline">
                                        Terms of Service
                                    </a>{' '}
                                    and{' '}
                                    <a href="#" className="text-blue-500 hover:underline">
                                        Privacy Policy
                                    </a>
                                    .
                                </Typography>
                            </div>
                        </CardBody>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default CheckoutPage;