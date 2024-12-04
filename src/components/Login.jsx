import Image from "next/image"

export default function Login() {
  // const isClient = typeof window !== "undefined"

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4 font-[&#39;Inter&#39;]">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-4 sm:p-8 mx-4 sm:mx-auto">
        <div className="text-center mb-8">
          <Image
            src="https://ai-public.creatie.ai/gen_page/logo_placeholder.png"
            alt="Logo"
            className="h-8 sm:h-12 mx-auto mb-4"
            width={48}
            height={48}
          />
          <h1 className="text-xl sm:text-2xl font-bold text-gray-900">
            Welcome back!
          </h1>
          <p className="text-gray-600 mt-2">Please sign in to continue</p>
        </div>
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-6">
          <button className="w-full sm:w-auto flex items-center justify-center gap-2 px-4 py-2.5 border border-gray-200 !rounded-button hover:bg-[#4285F4]/10 transition-colors">
            <i className="fab fa-google text-[#4285F4]"></i>

            <span className="text-sm text-[#4285F4]">Google</span>
          </button>
          <button className="text-[#4285F4] w-full sm:w-auto flex items-center justify-center gap-2 px-4 py-2.5 border border-gray-200 !rounded-button hover:bg-[#1877F2]/10 transition-colors">
            <i className="fab fa-facebook"></i>

            <span className="text-sm ">Facebook</span>
          </button>
          <button className="text-[#4285F4] w-full sm:w-auto flex items-center justify-center gap-2 px-4 py-2.5 border border-gray-200 !rounded-button hover:bg-[#1DA1F2]/10 transition-colors">
            <i className="fab fa-twitter"></i>
            <span className="text-sm">Twitter</span>
          </button>
        </div>
        <div className="relative mb-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-200"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-4 bg-white text-gray-600">
              or continue with email
            </span>
          </div>
        </div>
        <form className="space-y-6">
          <div>
            <label
              className="block text-sm font-medium text-gray-700 mb-1"
              htmlFor="email"
            >
              Email address
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <i className="far fa-envelope text-gray-500"></i>
              </div>
              <input
                id="email"
                type="email"
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 bg-white text-gray-900 !rounded-button focus:ring-2 focus:ring-custom focus:border-custom"
                placeholder="Enter your email"
              />
            </div>
            <p className="mt-1 text-sm text-red-600 hidden">
              Please enter a valid email address
            </p>
          </div>
          <div>
            <label
              className="block text-sm font-medium text-gray-700 mb-1"
              htmlFor="password"
            >
              Password
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <i className="fas fa-lock text-gray-500"></i>
              </div>
              <input
                id="password"
                type="password"
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 bg-white text-gray-900 !rounded-button focus:ring-2 focus:ring-custom focus:border-custom"
                placeholder="Enter your password"
              />
            </div>
            <p className="mt-1 text-sm text-red-600 hidden">
              Password must be at least 8 characters
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-0">
            <div className="flex items-center">
              <input
                id="remember-me"
                type="checkbox"
                className="h-4 w-4 text-custom focus:ring-custom border-gray-300 bg-white !rounded"
              />
              <label
                htmlFor="remember-me"
                className="ml-2 block text-sm text-gray-700"
              >
                Remember me
              </label>
            </div>
            <a
              href="#"
              className="text-sm font-medium text-custom hover:text-custom/80"
            >
              Forgot password?
            </a>
          </div>
          <button
            type="submit"
            className="w-full flex justify-center py-2.5 px-4 border border-transparent !rounded-button text-white bg-custom hover:bg-custom/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-custom"
          >
            Sign in
          </button>
        </form>
        <p className="mt-6 text-center text-sm text-gray-600">
          Don&#39;t have an account?
          <a
            href="#"
            className="ml-2 font-medium text-custom hover:text-custom/80"
          >
            Sign up
          </a>
        </p>
      </div>
    </div>
  )
}
