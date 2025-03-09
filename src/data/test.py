import pandas as pd 

df = pd.read_json("/Users/meganho/downloads/hackathons/flare_social/src/data/training_data.json")
df = df.head(100)
df.to_json("/Users/meganho/downloads/hackathons/flare_social/src/data/training_data_100.json", orient="records")