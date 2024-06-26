import pandas as pd
import json

#export excel file to json file

# Read the Excel file
df = pd.read_excel('./DataHLH2024.xlsx')

# Convert the DataFrame to JSON
json_data = df.to_json(orient='records')

# Write the JSON data to a file
with open('data.json', 'w') as f:
    f.write(json_data)