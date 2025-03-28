import React, { useState, useEffect } from 'react';
import {
    Star as StarIcon,
    StarHalf as StarHalfIcon,
    StarBorder as StarBorderIcon,
    FilterList as FilterIcon,
    Tune as TuneIcon,
    GridView as GridViewIcon,
    ViewList as ListViewIcon,
    LocalOffer as SaleIcon,
    NewReleases as NewIcon,
    Check as CheckIcon
} from '@mui/icons-material';
import {
    Avatar,
    Box,
    Button,
    Card,
    CardActionArea,
    CardContent,
    CardMedia,
    Checkbox,
    Chip,
    Divider,
    Drawer,
    FormControl,
    FormControlLabel,
    FormGroup,
    Grid,
    IconButton,
    InputLabel,
    MenuItem,
    Pagination,
    Radio,
    RadioGroup,
    Select,
    Slider,
    Typography
} from '@mui/material';

// Sample data
import { products } from '../service/productData';
import { FilterOptions, Product, SortOption } from '../service/interface';

const ProductListPage: React.FC = () => {
    // State
    const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
    const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);
    const [sortOption, setSortOption] = useState<SortOption>('featured');
    const [page, setPage] = useState(1);
    const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
    const [filters, setFilters] = useState<FilterOptions>({
        category: [],
        brand: [],
        priceRange: [0, 1000],
        inStock: false,
        onSale: false
    });

    // Unique categories and brands
    const categories = [...new Set(products.map(p => p.category))];
    const brands = [...new Set(products.map(p => p.brand))];

    // Products per page
    const productsPerPage = viewMode === 'grid' ? 8 : 4;
    const pageCount = Math.ceil(filteredProducts.length / productsPerPage);
    const paginatedProducts = filteredProducts.slice(
        (page - 1) * productsPerPage,
        page * productsPerPage
    );

    // Filter and sort products
    useEffect(() => {
        let result = [...products];

        // Apply filters
        if (filters.category.length > 0) {
            result = result.filter(p => filters.category.includes(p.category));
        }
        if (filters.brand.length > 0) {
            result = result.filter(p => filters.brand.includes(p.brand));
        }
        if (filters.inStock) {
            result = result.filter(p => p.inStock);
        }
        if (filters.onSale) {
            result = result.filter(p => p.isOnSale);
        }
        result = result.filter(p =>
            p.price >= filters.priceRange[0] && p.price <= filters.priceRange[1]
        );

        // Apply sorting
        switch (sortOption) {
            case 'featured':
                result = result.sort((a, b) => (b.isFeatured ? 1 : 0) - (a.isFeatured ? 1 : 0));
                break;
            case 'newest':
                result = result.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
                break;
            case 'price-low-high':
                result = result.sort((a, b) => a.price - b.price);
                break;
            case 'price-high-low':
                result = result.sort((a, b) => b.price - a.price);
                break;
            case 'rating':
                result = result.sort((a, b) => b.rating - a.rating);
                break;
            default:
                break;
        }

        setFilteredProducts(result);
        setPage(1); // Reset to first page when filters/sort change
    }, [filters, sortOption]);

    // Handlers
    const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
        setPage(value);
    };

    const handleCategoryChange = (category: string) => {
        setFilters(prev => ({
            ...prev,
            category: prev.category.includes(category)
                ? prev.category.filter(c => c !== category)
                : [...prev.category, category]
        }));
    };

    const handleBrandChange = (brand: string) => {
        setFilters(prev => ({
            ...prev,
            brand: prev.brand.includes(brand)
                ? prev.brand.filter(b => b !== brand)
                : [...prev.brand, brand]
        }));
    };

    const handlePriceRangeChange = (event: Event, newValue: number | number[]) => {
        setFilters(prev => ({
            ...prev,
            priceRange: newValue as [number, number]
        }));
    };

    const handleInStockChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFilters(prev => ({
            ...prev,
            inStock: event.target.checked
        }));
    };

    const handleOnSaleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFilters(prev => ({
            ...prev,
            onSale: event.target.checked
        }));
    };

    const handleSortChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        setSortOption(event.target.value as SortOption);
    };

    const resetFilters = () => {
        setFilters({
            category: [],
            brand: [],
            priceRange: [0, 1000],
            inStock: false,
            onSale: false
        });
    };

    // Render star rating
    const renderStars = (rating: number) => {
        const stars = [];
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 >= 0.5;

        for (let i = 1; i <= 5; i++) {
            if (i <= fullStars) {
                stars.push(<StarIcon key={i} className="text-yellow-500 text-sm" />);
            } else if (i === fullStars + 1 && hasHalfStar) {
                stars.push(<StarHalfIcon key={i} className="text-yellow-500 text-sm" />);
            } else {
                stars.push(<StarBorderIcon key={i} className="text-yellow-500 text-sm" />);
            }
        }

        return stars;
    };

    // Filters sidebar
    const filtersSidebar = (
        <div className="p-4">
            <div className="flex justify-between items-center mb-4">
                <Typography variant="h6" className="font-bold">
                    Filters
                </Typography>
                <Button
                    onClick={resetFilters}
                    size="small"
                    className="text-primary"
                >
                    Reset All
                </Button>
            </div>

            {/* Categories */}
            <div className="mb-6">
                <Typography variant="subtitle1" className="font-semibold mb-2">
                    Categories
                </Typography>
                <FormGroup>
                    {categories.map(category => (
                        <FormControlLabel
                            key={category}
                            control={
                                <Checkbox
                                    checked={filters.category.includes(category)}
                                    onChange={() => handleCategoryChange(category)}
                                    size="small"
                                />
                            }
                            label={category}
                        />
                    ))}
                </FormGroup>
            </div>

            {/* Brands */}
            <div className="mb-6">
                <Typography variant="subtitle1" className="font-semibold mb-2">
                    Brands
                </Typography>
                <FormGroup>
                    {brands.map(brand => (
                        <FormControlLabel
                            key={brand}
                            control={
                                <Checkbox
                                    checked={filters.brand.includes(brand)}
                                    onChange={() => handleBrandChange(brand)}
                                    size="small"
                                />
                            }
                            label={brand}
                        />
                    ))}
                </FormGroup>
            </div>

            {/* Price Range */}
            <div className="mb-6">
                <Typography variant="subtitle1" className="font-semibold mb-2">
                    Price Range
                </Typography>
                <Slider
                    value={filters.priceRange}
                    onChange={handlePriceRangeChange}
                    valueLabelDisplay="auto"
                    min={0}
                    max={1000}
                    step={10}
                    valueLabelFormat={(value) => `$${value}`}
                    className="text-primary"
                />
                <div className="flex justify-between">
                    <Typography variant="body2">${filters.priceRange[0]}</Typography>
                    <Typography variant="body2">${filters.priceRange[1]}</Typography>
                </div>
            </div>

            {/* Other Filters */}
            <div className="mb-6">
                <Typography variant="subtitle1" className="font-semibold mb-2">
                    Other
                </Typography>
                <FormGroup>
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={filters.inStock}
                                onChange={handleInStockChange}
                                size="small"
                            />
                        }
                        label="In Stock Only"
                    />
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={filters.onSale}
                                onChange={handleOnSaleChange}
                                size="small"
                            />
                        }
                        label="On Sale"
                    />
                </FormGroup>
            </div>
        </div>
    );

    return (
        <div className="container mx-auto px-4 py-8">
            {/* Page Header */}
            <div className="mb-8">
                <Typography variant="h4" className="font-bold mb-2">
                    Our Products
                </Typography>
                <Typography variant="body1" className="text-gray-600">
                    {filteredProducts.length} products found
                </Typography>
            </div>

            <Grid container spacing={4}>
                {/* Filters Sidebar - Desktop */}
                <Grid item xs={12} md={3} className="hidden md:block">
                    <Card className="sticky top-4">
                        {filtersSidebar}
                    </Card>
                </Grid>

                {/* Main Content */}
                <Grid item xs={12} md={9}>
                    {/* Toolbar */}
                    <Card className="mb-6">
                        <div className="p-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                            <div className="flex items-center gap-2">
                                <IconButton
                                    onClick={() => setMobileFiltersOpen(true)}
                                    className="md:hidden"
                                >
                                    <FilterIcon />
                                </IconButton>
                                <IconButton
                                    onClick={() => setViewMode('grid')}
                                    color={viewMode === 'grid' ? 'primary' : 'default'}
                                >
                                    <GridViewIcon />
                                </IconButton>
                                <IconButton
                                    onClick={() => setViewMode('list')}
                                    color={viewMode === 'list' ? 'primary' : 'default'}
                                >
                                    <ListViewIcon />
                                </IconButton>
                                <Typography variant="body2" className="text-gray-600 ml-2">
                                    {viewMode === 'grid' ? 'Grid View' : 'List View'}
                                </Typography>
                            </div>

                            <div className="flex items-center gap-2">
                                <Typography variant="body2" className="text-gray-600">
                                    Sort by:
                                </Typography>
                                <FormControl size="small" variant="outlined">
                                    <Select
                                        value={sortOption}
                                        onChange={handleSortChange}
                                        className="bg-white"
                                    >
                                        <MenuItem value="featured">Featured</MenuItem>
                                        <MenuItem value="newest">Newest</MenuItem>
                                        <MenuItem value="price-low-high">Price: Low to High</MenuItem>
                                        <MenuItem value="price-high-low">Price: High to Low</MenuItem>
                                        <MenuItem value="rating">Rating</MenuItem>
                                    </Select>
                                </FormControl>
                            </div>
                        </div>
                    </Card>

                    {/* Mobile Filters Drawer */}
                    <Drawer
                        anchor="left"
                        open={mobileFiltersOpen}
                        onClose={() => setMobileFiltersOpen(false)}
                    >
                        <div className="w-64">
                            {filtersSidebar}
                        </div>
                    </Drawer>

                    {/* Products */}
                    {filteredProducts.length > 0 ? (
                        <>
                            {viewMode === 'grid' ? (
                                <Grid container spacing={3}>
                                    {paginatedProducts.map((product) => (
                                        <Grid item xs={12} sm={6} lg={4} xl={3} key={product.id}>
                                            <ProductCard product={product} />
                                        </Grid>
                                    ))}
                                </Grid>
                            ) : (
                                <div className="space-y-4">
                                    {paginatedProducts.map((product) => (
                                        <ProductRow key={product.id} product={product} />
                                    ))}
                                </div>
                            )}

                            {/* Pagination */}
                            {pageCount > 1 && (
                                <div className="flex justify-center mt-8">
                                    <Pagination
                                        count={pageCount}
                                        page={page}
                                        onChange={handlePageChange}
                                        color="primary"
                                        shape="rounded"
                                    />
                                </div>
                            )}
                        </>
                    ) : (
                        <Card className="py-12 text-center">
                            <Typography variant="h6" className="mb-2">
                                No products found
                            </Typography>
                            <Typography variant="body1" className="text-gray-600 mb-4">
                                Try adjusting your filters or search terms
                            </Typography>
                            <Button
                                variant="outlined"
                                color="primary"
                                onClick={resetFilters}
                            >
                                Reset Filters
                            </Button>
                        </Card>
                    )}
                </Grid>
            </Grid>
        </div>
    );
};

// Product Card Component (Grid View)
const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
    return (
        <Card className="h-full flex flex-col hover:shadow-lg transition-shadow">
            <CardActionArea className="flex-grow">
                <div className="relative">
                    <CardMedia
                        component="img"
                        height="200"
                        image={product.image}
                        alt={product.name}
                        className="object-contain p-4"
                    />
                    <div className="absolute top-2 left-2 space-y-1">
                        {product.isNew && (
                            <Chip
                                icon={<NewIcon fontSize="small" />}
                                label="New"
                                size="small"
                                className="bg-green-500 text-white"
                            />
                        )}
                        {product.isOnSale && (
                            <Chip
                                icon={<SaleIcon fontSize="small" />}
                                label="Sale"
                                size="small"
                                className="bg-red-500 text-white"
                            />
                        )}
                    </div>
                </div>
                <CardContent>
                    <Typography
                        variant="subtitle1"
                        className="font-semibold mb-1 line-clamp-2"
                        title={product.name}
                    >
                        {product.name}
                    </Typography>
                    <Typography variant="body2" className="text-gray-600 mb-2">
                        {product.brand}
                    </Typography>
                    <div className="flex items-center mb-2">
                        {renderStars(product.rating)}
                        <Typography variant="body2" className="text-gray-600 ml-1">
                            ({product.reviewCount})
                        </Typography>
                    </div>
                    <div className="flex items-center gap-2">
                        <Typography variant="h6" className="font-bold">
                            ${product.price.toFixed(2)}
                        </Typography>
                        {product.originalPrice && (
                            <Typography variant="body2" className="line-through text-gray-500">
                                ${product.originalPrice.toFixed(2)}
                            </Typography>
                        )}
                    </div>
                    <div className="mt-3 flex flex-wrap gap-1">
                        {product.colors.map(color => (
                            <span
                                key={color}
                                className="w-4 h-4 rounded-full border border-gray-300"
                                style={{ backgroundColor: color.toLowerCase() }}
                                title={color}
                            />
                        ))}
                    </div>
                </CardContent>
            </CardActionArea>
            <div className="p-4 pt-0">
                <Button
                    variant="contained"
                    color="primary"
                    fullWidth
                    disabled={!product.inStock}
                >
                    {product.inStock ? 'Add to Cart' : 'Out of Stock'}
                </Button>
            </div>
        </Card>
    );
};

// Product Row Component (List View)
const ProductRow: React.FC<{ product: Product }> = ({ product }) => {
    return (
        <Card className="hover:shadow-md transition-shadow">
            <CardActionArea>
                <div className="flex flex-col sm:flex-row">
                    <div className="sm:w-1/4 p-4 relative">
                        <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-48 object-contain"
                        />
                        <div className="absolute top-4 left-4 space-y-1">
                            {product.isNew && (
                                <Chip
                                    icon={<NewIcon fontSize="small" />}
                                    label="New"
                                    size="small"
                                    className="bg-green-500 text-white"
                                />
                            )}
                            {product.isOnSale && (
                                <Chip
                                    icon={<SaleIcon fontSize="small" />}
                                    label="Sale"
                                    size="small"
                                    className="bg-red-500 text-white"
                                />
                            )}
                        </div>
                    </div>
                    <div className="sm:w-3/4 p-4">
                        <Typography variant="h6" className="font-semibold mb-1">
                            {product.name}
                        </Typography>
                        <Typography variant="body1" className="text-gray-600 mb-2">
                            {product.brand}
                        </Typography>
                        <div className="flex items-center mb-2">
                            {renderStars(product.rating)}
                            <Typography variant="body2" className="text-gray-600 ml-1">
                                ({product.reviewCount})
                            </Typography>
                        </div>
                        <Typography variant="body1" className="mb-4 line-clamp-3">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </Typography>
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                            <div className="flex items-center gap-2 mb-2 sm:mb-0">
                                <Typography variant="h6" className="font-bold">
                                    ${product.price.toFixed(2)}
                                </Typography>
                                {product.originalPrice && (
                                    <Typography variant="body2" className="line-through text-gray-500">
                                        ${product.originalPrice.toFixed(2)}
                                    </Typography>
                                )}
                            </div>
                            <div className="flex gap-2">
                                <Button
                                    variant="outlined"
                                    size="small"
                                >
                                    View Details
                                </Button>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    size="small"
                                    disabled={!product.inStock}
                                >
                                    {product.inStock ? 'Add to Cart' : 'Out of Stock'}
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </CardActionArea>
        </Card>
    );
};

export default ProductListPage;