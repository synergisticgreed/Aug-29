import "dotenv/config"

export const ENV=()=>{
    return {
        PORT : process.env.PORT || 3000,
        FRONTEND_URL:process.env.FRONTEND_URL || "http://localhost:3000"

    }
}