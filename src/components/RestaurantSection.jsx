import { motion, AnimatePresence } from 'framer-motion'
import { SITE_CONFIG } from '../config'
import Card from './Card'
import Button from './Button'

const restaurants = [
  { id: 'jollibee', name: '', logo: SITE_CONFIG.restaurantLogos.jollibee },
  { id: 'mangInasal', name: '', logo: SITE_CONFIG.restaurantLogos.mangInasal },
  { id: 'chowking', name: '', logo: SITE_CONFIG.restaurantLogos.chowking },
  { id: 'greenwich', name: '', logo: SITE_CONFIG.restaurantLogos.greenwich },
  { id: 'mcdonalds', name: '', logo: SITE_CONFIG.restaurantLogos.mcdonalds },
  { id: 'burgerKing', name: '', logo: SITE_CONFIG.restaurantLogos.burgerKing },
  { id: 'starbucks', name: '', logo: SITE_CONFIG.restaurantLogos.starbucks },
  { id: 'donMacchiatos', name: '', logo: SITE_CONFIG.restaurantLogos.donMacchiatos },
  { id: 'samgyupsalamat', name: 'ss', logo: SITE_CONFIG.restaurantLogos.samgyupsalamat },
  { id: 'others', name: 'Others', logo: 'https://m.media-amazon.com/images/I/51OR2LtECOS._AC_UF894,1000_QL80_.jpg' },
]

export default function RestaurantSection({ selectedRestaurant, onRestaurantSelect, customRestaurant, onCustomRestaurantChange, onNext }) {
  const showCustomInput = selectedRestaurant === 'others'

  return (
    <div className="restaurant-section"><br></br><br></br>
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Where should we eat?
      </motion.h2>

      <motion.p
        className="section-subtitle"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1 }}
      >
        Choose your favorite.
      </motion.p>

      <motion.div
        className="restaurant-grid"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        {restaurants.map((restaurant, index) => (
          <motion.div
            key={restaurant.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 + index * 0.05 }}
          >
            <Card
              selected={selectedRestaurant === restaurant.id}
              onClick={() => onRestaurantSelect(restaurant.id)}
            >
              {restaurant.id === 'others' ? (
                <>
                  <img
                    src={restaurant.logo}
                    alt="Others"
                    className="restaurant-logo"
                    loading="lazy"
                  />
                  <span className="restaurant-name">Others</span>
                </>
              ) : (
                <img
                  src={restaurant.logo}
                  alt={restaurant.name}
                  className="restaurant-logo"
                  loading="lazy"
                />
              )}
            </Card>
          </motion.div>
        ))}
      </motion.div>

      <AnimatePresence>
        {showCustomInput && (
          <motion.div
            className="custom-input-wrapper"
            initial={{ opacity: 0, height: 0, y: -10 }}
            animate={{ opacity: 1, height: 'auto', y: 0 }}
            exit={{ opacity: 0, height: 0, y: -10 }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
          >
            <input
              type="text"
              value={customRestaurant}
              onChange={(e) => onCustomRestaurantChange(e.target.value)}
              placeholder="Where do you want to go?"
              className="custom-input"
              aria-label="Enter custom restaurant name"
            />
          </motion.div>
        )}
      </AnimatePresence>

      {selectedRestaurant && (!showCustomInput || customRestaurant.trim()) && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Button onClick={onNext} variant="primary" icon="fa-arrow-right">
            NEXT
          </Button>
        </motion.div>
      )}
    </div>
  )
}