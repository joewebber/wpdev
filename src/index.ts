// Import the oclif command library
import {Command, flags} from '@oclif/command'

class Wpdev extends Command {

  /**
   * Description of the command
   */
  static description = 'Automated Wordpress development setup'

  /**
   * Flags
   */
  static flags = {

    // Version flag
    version: flags.version({char: 'v'}),

    // Help flag
    help: flags.help({char: 'h'}),

  }

  /**
   * Run the program
   */
  async run() {

    // Parse the flags
    const {flags} = this.parse(Wpdev)

    

  }

}

// Export the class
export = Wpdev
