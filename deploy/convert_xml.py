''' =========================================================================
    posts_xml_to_json

    This file will read in a posts.xml file (generated by dumping the XML
    of a SQLite DB (e.g., from Firefox SQLite manager) and convert
    it to a JSON file, which will be used by mongo
    ========================================================================='''
import json
import xmldict

''' =========================================================================

Functions

========================================================================='''
def convert():
    '''Loads the posts.xml file, converts to JSON, and saves it'''

    #Load the posts file, make sure it exists
    try:
        notes = open('mysite_notes.xml')
    except IOError:
        print 'No posts.xml file defined! Make sure .xml exists'
        return False

    #Read the file
    notes = notes.read()

    #Convert the sucker
    notes_dict = xmldict.xml_to_dict(notes)

    #Prepare json file
    json_file = open('notes.json', 'w')

    #Get the notes
    notes = notes_dict['database']['table']
    
    print '*' * 42
    print notes
    for item in notes:
        print '*' * 42
        print 'NOTE ITEM:'
        print item

    #MongoDB expects the JSON file to have one document per line, so we need to
    #   iterate over each line in the file
    for card in notes:
        #Create an object from the existing one
        temp_note = {}
        temp_note['slug'] = card['column'][0]['#text']
        temp_note['title'] = card['column'][1]['#text']
        temp_note['post_date'] = card['column'][2]['#text']
        temp_note['post_last_edit_date'] = card['column'][3]['#text']
        temp_note['category'] = card['column'][6]['#text']
        temp_note['content'] = card['column'][7]['#text']
        temp_note['description'] = card['column'][8]['#text']

        #Save it
        json_file.write(json.dumps(temp_note) + '\n')

    #close it
    json_file.close()

    return True


''' =========================================================================

    Init / Main

    ========================================================================='''
if __name__ == '__main__':
    #Run it!
    print "Started conversion process..."
    convert()
    print "Done! notes.json file created"