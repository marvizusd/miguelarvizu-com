import Head from 'next/head'
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'
import CheckoutForm from '../../components/CheckoutForm'

export default function PaymentForm() {
  const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY)

  return (
    <div className="container">
      <Head>
      </Head>

      <main>
        <Elements stripe={stripePromise} >
            <CheckoutForm />
        </Elements>

        STRIPE PAYMENT COMPONENT
      </main>

      <footer></footer>

      <style jsx>{`
      
      `}</style>
    </div>
  )
}
