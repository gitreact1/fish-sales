
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Catalog from "./pages/Catalog";
import About from "./pages/About";
import Delivery from "./pages/Delivery";
import Contacts from "./pages/Contacts";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import ProductDetail from "./pages/ProductDetail";
import CategoryPage from "./pages/CategoryPage";
import News from "./pages/News";
import Reviews from "./pages/Reviews";
import Payment from "./pages/Payment";
import Warranty from "./pages/Warranty";
import FAQ from "./pages/FAQ";
import Recipes from "./pages/Recipes";
import Wholesale from "./pages/Wholesale";
import Careers from "./pages/Careers";
import Blog from "./pages/Blog";
import Promotions from "./pages/Promotions";
import Loyalty from "./pages/Loyalty";
import Certificates from "./pages/Certificates";
import Suppliers from "./pages/Suppliers";
import Nutrition from "./pages/Nutrition";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/about" element={<About />} />
          <Route path="/delivery" element={<Delivery />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/category/:category" element={<CategoryPage />} />
          <Route path="/news" element={<News />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/warranty" element={<Warranty />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/recipes" element={<Recipes />} />
          <Route path="/wholesale" element={<Wholesale />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/promotions" element={<Promotions />} />
          <Route path="/loyalty" element={<Loyalty />} />
          <Route path="/certificates" element={<Certificates />} />
          <Route path="/suppliers" element={<Suppliers />} />
          <Route path="/nutrition" element={<Nutrition />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
