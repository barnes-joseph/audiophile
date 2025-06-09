import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";

export default [
    layout("components/MainLayout.tsx", [
        index("routes/home.tsx"),
        route("earphones", "routes/earphones.tsx"),
        route("headphones", "routes/headphones.tsx"),
        route("speakers", "routes/speakers.tsx"),
        route("product/:slug", "routes/product-detail.tsx"),
        route("checkout", "routes/checkout.tsx")
    ]),
] satisfies RouteConfig;
