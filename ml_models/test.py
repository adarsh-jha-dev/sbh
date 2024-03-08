from tensorflow.keras.preprocessing import image
from tensorflow.keras.models import load_model
import numpy as np

#Loading the model
model = load_model('pneumonia_xray_classifier.h5')
class_names = ['Normal', 'Opacity']

#Test Image compatibility
custom_image_path = 'test2.jpeg'
img = image.load_img(custom_image_path, target_size=(150, 150))
img_array = image.img_to_array(img)
img_array = np.expand_dims(img_array, axis=0)
img_array /= 255.0

predictions = model.predict(img_array)

class_index = int(predictions[0][0] > 0.5)
predicted_class = class_names[class_index]

print(f"The model predicts: {predicted_class}")